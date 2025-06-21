// 📁 routes/certifications.js
const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const dataPath = path.join(__dirname, "../data/certifications.json");

const lireCertifications = () => {
    try {
        const raw = fs.readFileSync(dataPath, "utf-8") || "[]";
        return JSON.parse(raw);
    } catch (err) {
        console.error("Erreur lecture JSON :", err);
        return [];
    }
};

const enregistrerCertifications = (data) => {
    try {
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
        return true;
    } catch (err) {
        console.error("Erreur écriture JSON :", err);
        return false;
    }
};

// 🧾 GET — Toutes les certifications (avec filtres)
router.get("/", (req, res) => {
    const { category, search } = req.query;
    let data = lireCertifications();

    if (category) {
        data = data.filter((c) => c.category === category);
    }

    if (search) {
        const mot = search.toLowerCase();
        data = data.filter((c) =>
            c.title.toLowerCase().includes(mot) ||
            c.provider.toLowerCase().includes(mot)
        );
    }

    res.status(200).json(data);
});

// ➕ POST — Ajouter une certif
router.post("/", (req, res) => {
    const nouvelle = req.body;
    if (!nouvelle.title || !nouvelle.pdf) {
        return res.status(400).json({ error: "Champs obligatoires manquants" });
    }

    const data = lireCertifications();
    data.push(nouvelle);

    if (enregistrerCertifications(data)) {
        res.status(201).json({ message: "Certification ajoutée", cert: nouvelle });
    } else {
        res.status(500).json({ error: "Erreur enregistrement" });
    }
});

// ❌ DELETE — Supprimer une certif par son titre exact
router.delete("/", (req, res) => {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: "Titre requis" });

    let data = lireCertifications();
    const initialLength = data.length;
    data = data.filter((c) => c.title !== title);

    if (data.length === initialLength) {
        return res.status(404).json({ error: "Certification non trouvée" });
    }

    if (enregistrerCertifications(data)) {
        res.status(200).json({ message: "Certification supprimée" });
    } else {
        res.status(500).json({ error: "Erreur suppression" });
    }
});

module.exports = router;
