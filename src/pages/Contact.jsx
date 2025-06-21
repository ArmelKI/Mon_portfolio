import React, { useState } from "react";

const Contact = () => {
    const [status, setStatus] = useState("");
    const [file, setFile] = useState(null);
    const [toast, setToast] = useState(null);

    const showToast = (msg, type = "success") => {
        setToast({ msg, type });
        setTimeout(() => setToast(null), 4000);
    };

    const handleFileUpload = async (name, email) => {
        if (!file || !name || !email) return false;

        const data = new FormData();
        data.append("file", file);
        data.append("name", name);
        data.append("email", email);

        try {
            const res = await fetch("http://localhost:5000/api/upload-fichier", {
                method: "POST",
                body: data,
            });

            const result = await res.json();
            if (!result.success) {
                console.error("❌ Upload fichier échoué :", result);
            }
            return result.success;
        } catch (error) {
            console.error("❌ Erreur pendant upload fichier :", error);
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("⏳ Envoi en cours…");

        const formData = new FormData(e.target);
        const name = formData.get("name");
        const email = formData.get("email");

        const formspreeData = new FormData();
        formspreeData.append("name", name);
        formspreeData.append("email", email);
        formspreeData.append("subject", formData.get("subject"));
        formspreeData.append("message", formData.get("message"));

        try {
            const response = await fetch("https://formspree.io/f/xanjdyoj", {
    method: "POST",
    headers: {
        Accept: "application/json",
    },
    body: formspreeData,
});

let formspreeOk = false;

try {
    const contentType = response.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
        const data = await response.json();
        formspreeOk = data.ok;
    } else {
        // Si ce n'est pas du JSON, on assume juste que c'est 200 OK
        formspreeOk = response.ok;
    }
} catch (err) {
    console.error("Erreur parsing réponse Formspree :", err.message);
}


            const formspreeJson = await response.json();
            const fichierOk = await handleFileUpload(name, email);

            if (response.ok && formspreeOk && fichierOk) {
                showToast("✅ Message + fichier bien envoyés !");
            } else if (response.ok || formspreeOk) {
                showToast("✅ Message envoyé (fichier non traité)", "warning");
            } else {
                showToast("❌ Erreur Formspree", "error");
}


            e.target.reset();
            setFile(null);
        } catch (error) {
            console.error("❌ Erreur globale :", error);
            showToast("❌ Une erreur est survenue.", "error");
        }
    };

    return (
        <section className="bg-gray-950 text-white py-16 px-6 md:px-20">
            <h2 className="text-4xl font-bold text-cyan-400 mb-10">📬 Me contacter</h2>

            <form
                onSubmit={handleSubmit}
                className="space-y-6 max-w-3xl"
                encType="multipart/form-data"
            >
                <input
                    name="name"
                    required
                    placeholder="Nom"
                    className="input-style"
                />
                <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    className="input-style"
                />
                <input
                    name="subject"
                    required
                    placeholder="Objet"
                    className="input-style"
                />
                <textarea
                    name="message"
                    required
                    rows="5"
                    placeholder="Message"
                    className="input-style"
                />
                <input
                    name="file"
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="text-sm text-gray-300"
                />
                <button
                    type="submit"
                    className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition"
                >
                    {status.includes("Envoi") ? "⏳ Envoi…" : "🚀 Envoyer"}
                </button>

                {status && <p className="text-sm text-gray-400">{status}</p>}
            </form>

            {toast && (
                <div
                    className={`fixed bottom-6 right-6 px-5 py-3 rounded shadow-lg text-sm animate-fade-in-up transition-opacity
                    ${
                        toast.type === "success"
                            ? "bg-green-600 text-white"
                            : toast.type === "warning"
                            ? "bg-yellow-600 text-white"
                            : "bg-red-600 text-white"
                    }`}
                >
                    {toast.msg}
                </div>
            )}
        </section>
    );
};

export default Contact;
