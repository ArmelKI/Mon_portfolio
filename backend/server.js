const express = require("express");
const cors = require("cors");
const multer = require("multer");
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 5000;

// 🌍 Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// 📁 Multer config
const storage = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
        const timestamp = Date.now();
        const safeName = file.originalname.replace(/\s+/g, "_");
        cb(null, `${timestamp}_${safeName}`);
    },
});
const upload = multer({ storage });

// 📄 Route de certifications
const certifRoutes = require("./routes/certifications");
app.use("/api/certifications", certifRoutes);

// 📎 Upload direct (CV ou autre)
app.post("/api/upload", upload.single("file"), (req, res) => {
    if (!req.file) return res.status(400).json({ error: "Aucun fichier reçu" });

    res.status(200).json({
        message: "✅ Fichier uploadé",
        filePath: `/uploads/${req.file.filename}`,
    });
});

// 📬 Contact (Formulaire avec fichier facultatif)
app.post("/api/contact", upload.single("file"), async (req, res) => {
    const { name, email, subject, message } = req.body;
    const file = req.file;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "kiarmelstephanenovak@gmail.com",
            pass: "gtzmlfdcdrokvduc",
        },
    });

    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: "kiarmelstephanenovak@gmail.com",
        subject: `📩 Nouveau message : ${subject}`,
        html: `
            <h2>📬 Nouveau message reçu</h2>
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Email :</strong> ${email}</p>
            <p><strong>Objet :</strong> ${subject}</p>
            <p><strong>Message :</strong><br/>${message?.replace(/\n/g, "<br/>")}</p>
        `,
        attachments: file
            ? [{ filename: file.originalname, path: file.path }]
            : [],
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("📨 Message avec pièce jointe envoyé !");
        return res.status(200).json({ success: true, message: "Message bien reçu." });
    } catch (error) {
        console.error("❌ Erreur d’envoi :", error.message);
        return res.status(500).json({ success: false, error: "Erreur serveur pendant l’envoi du mail." });
    }
});

// 📤 Upload de fichier avec alerte mail
app.post("/api/upload-fichier", upload.single("file"), (req, res) => {
    const { name, email } = req.body;
    const file = req.file;

    if (!file) {
        return res.status(400).json({ success: false, error: "Aucun fichier reçu" });
    }

    const finalName = `${Date.now()}_${name.trim().replace(/\s+/g, "_")}_${email
        .split("@")[0]
        .toLowerCase()}_${file.originalname.replace(/\s+/g, "_")}`;
    const newPath = path.join("uploads", finalName);

    fs.rename(file.path, newPath, async (err) => {
        if (err) {
            console.error("❌ Erreur renommage fichier :", err.message);
            return res.status(500).json({ success: false, error: "Erreur serveur" });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "kiarmelstephanenovak@gmail.com",
                pass: "gtzmlfdcdrokvduc",
            },
        });

        const mailOptions = {
            from: `"Portfolio" <${email}>`,
            to: "kiarmelstephanenovak@gmail.com",
            subject: `📁 Nouveau fichier reçu`,
            html: `
                <p>Un fichier a été reçu via le formulaire.</p>
                <p><strong>Nom :</strong> ${name}</p>
                <p><strong>Email :</strong> ${email}</p>
                <p><strong>Fichier :</strong> ${finalName}</p>
            `
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log("📬 Alerte fichier envoyée !");
        } catch (error) {
            console.error("❌ Erreur envoi mail fichier :", error.message);
        }

        res.status(200).json({ success: true, filePath: `/uploads/${finalName}` });
    });
});

// 📂 Liste des fichiers
app.get("/api/fichiers", (req, res) => {
    const dossier = path.join(__dirname, "uploads");
    fs.readdir(dossier, (err, fichiers) => {
        if (err) {
            console.error("❌ Erreur lecture uploads :", err.message);
            return res.status(500).json({ error: "Impossible de lire les fichiers" });
        }

        const fichiersAvecLiens = fichiers.map((nom) => ({
            nom,
            lien: `/uploads/${nom}`,
        }));

        res.status(200).json({ fichiers: fichiersAvecLiens });
    });
});

// ✅ Lancement
app.listen(PORT, () => {
    console.log(`🚀 Serveur prêt sur http://localhost:${PORT}`);
});
