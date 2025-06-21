import React, { useState, useEffect } from "react";
import { FaTrash, FaFilePdf } from "react-icons/fa";

const AdminCertifications = () => {
    const [formData, setFormData] = useState({
        title: "",
        provider: "",
        date: "",
        duration: "",
        category: "ai",
        skills: "",
        description: "",
        verifyUrl: "",
    });

    const [file, setFile] = useState(null);
    const [fileUrl, setFileUrl] = useState("");
    const [uploadStatus, setUploadStatus] = useState("");
    const [certifs, setCertifs] = useState([]);
    const [recherche, setRecherche] = useState("");
    const [filtre, setFiltre] = useState("all");

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleFileUpload = async () => {
        if (!file) return;

        const data = new FormData();
        data.append("file", file);
        const res = await fetch("http://localhost:5000/api/upload", {
            method: "POST",
            body: data,
        });
        const result = await res.json();

        if (result.filePath) {
            setFileUrl(result.filePath);
            setUploadStatus("✅ Fichier uploadé !");
        } else {
            setUploadStatus("❌ Échec upload");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...formData,
            pdf: fileUrl,
            skills: formData.skills.split(",").map((s) => s.trim()),
        };

        const res = await fetch("http://localhost:5000/api/certifications", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (res.ok) {
            alert("✅ Certification ajoutée !");
            setFormData({
                title: "",
                provider: "",
                date: "",
                duration: "",
                category: "ai",
                skills: "",
                description: "",
                verifyUrl: "",
            });
            setFile(null);
            setFileUrl("");
            setUploadStatus("");
            fetchCertifs();
        } else {
            alert("❌ Erreur d’ajout");
        }
    };

    const fetchCertifs = async () => {
        let url = "http://localhost:5000/api/certifications";

        const params = [];
        if (filtre !== "all") params.push(`category=${filtre}`);
        if (recherche) params.push(`search=${recherche}`);
        if (params.length) url += "?" + params.join("&");

        const res = await fetch(url);
        const data = await res.json();
        setCertifs(data);
    };

    const handleDelete = async (title) => {
        const confirm = window.confirm("Confirmer la suppression ?");
        if (!confirm) return;

        const res = await fetch("http://localhost:5000/api/certifications", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title }),
        });

        if (res.ok) {
            alert("🗑️ Supprimée !");
            fetchCertifs();
        } else {
            alert("❌ Échec suppression");
        }
    };

    useEffect(() => {
        fetchCertifs();
    }, [filtre, recherche]);

    return (
        <div className="space-y-10">
            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white dark:bg-gray-800 p-6 rounded shadow"
            >
                <h2 className="text-2xl col-span-2 font-bold text-cyan-500">➕ Ajouter une Certification</h2>
                <input name="title" value={formData.title} onChange={handleChange} placeholder="Titre" required className="input" />
                <input name="provider" value={formData.provider} onChange={handleChange} placeholder="Organisme" required className="input" />
                <input name="date" value={formData.date} onChange={handleChange} placeholder="Date" className="input" />
                <input name="duration" value={formData.duration} onChange={handleChange} placeholder="Durée" className="input" />
                <select name="category" value={formData.category} onChange={handleChange} className="input">
                    <option value="ai">IA</option>
                    <option value="data">Data</option>
                    <option value="cyber">Cyber</option>
                    <option value="mobile">Mobile</option>
                    <option value="cloud">Cloud</option>
                    <option value="finance">Finance</option>
                    <option value="web">Web</option>
                </select>
                <input name="skills" value={formData.skills} onChange={handleChange} placeholder="Compétences (virgules)" className="input col-span-2" />
                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="input col-span-2" rows={3} />
                <input name="verifyUrl" value={formData.verifyUrl} onChange={handleChange} placeholder="Lien de vérification (optionnel)" className="input col-span-2" />
                <input type="file" onChange={(e) => setFile(e.target.files[0])} className="col-span-2" />
                <button type="button" onClick={handleFileUpload} className="bg-cyan-500 text-white px-4 py-2 rounded col-span-1 hover:bg-cyan-600">
                    📤 Uploader fichier
                </button>
                <p className="text-sm text-gray-500 col-span-1">{uploadStatus}</p>
                <button type="submit" className="col-span-2 bg-emerald-500 text-white px-6 py-3 rounded hover:bg-emerald-600">
                    ✅ Ajouter la certification
                </button>
            </form>

            <div>
                <h3 className="text-2xl font-bold text-cyan-500 mb-4">📋 Liste des Certifications</h3>

                <div className="flex gap-4 mb-4 flex-wrap">
                    <input
                        value={recherche}
                        onChange={(e) => setRecherche(e.target.value)}
                        placeholder="🔍 Rechercher…"
                        className="input"
                    />
                    <select value={filtre} onChange={(e) => setFiltre(e.target.value)} className="input">
                        <option value="all">Toutes</option>
                        <option value="ai">IA</option>
                        <option value="data">Data</option>
                        <option value="cyber">Cyber</option>
                        <option value="mobile">Mobile</option>
                        <option value="cloud">Cloud</option>
                        <option value="finance">Finance</option>
                        <option value="web">Web</option>
                    </select>
                </div>

                <div className="grid gap-4">
                    {certifs.map((cert, i) => (
                        <div
                            key={i}
                            className="bg-white dark:bg-gray-800 rounded border p-4 flex justify-between items-start"
                        >
                            <div>
                                <h4 className="font-bold text-lg">{cert.title}</h4>
                                <p className="text-sm text-gray-500">{cert.provider} — {cert.date}</p>
                                <p className="text-sm mt-1">{cert.description}</p>
                                <div className="flex gap-4 mt-2 text-sm">
                                    {cert.pdf && (
                                        <a
                                            href={`http://localhost:5000${cert.pdf}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-cyan-500 hover:underline"
                                        >
                                            <FaFilePdf className="text-red-500" />
                                            Certificat
                                        </a>
                                    )}
                                    {cert.verifyUrl && (
                                        <a
                                            href={cert.verifyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-green-500 hover:underline"
                                        >
                                            Vérifier
                                        </a>
                                    )}
                                </div>
                            </div>
                            <button onClick={() => handleDelete(cert.title)} className="text-red-500 hover:text-red-700">
                                <FaTrash />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminCertifications;
