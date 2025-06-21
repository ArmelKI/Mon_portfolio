import React, { useState } from "react";
import AdminCertifications from "../components/AdminCertifications";

const Admin = () => {
    const [cvFile, setCvFile] = useState(null);
    const [cvStatus, setCvStatus] = useState("");
    const [isUploading, setIsUploading] = useState(false);

    const handleCvUpload = async () => {
        if (!cvFile) return;

        setIsUploading(true);
        setCvStatus("Upload en cours...");

        try {
            const formData = new FormData();
            formData.append("file", cvFile);

            const res = await fetch("http://localhost:5000/api/upload", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) throw new Error("Échec de l'upload");

            const data = await res.json();
            setCvStatus(data.filePath ? "✅ CV uploadé avec succès !" : "❌ Échec de l'upload");
        } catch (error) {
            console.error("Erreur:", error);
            setCvStatus("❌ Erreur lors de l'upload");
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <div className="pt-20 px-6 md:px-20 space-y-12">
            <AdminCertifications />

            <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-cyan-500 mb-4">
                    📄 Gestion du CV
                </h3>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Sélectionner un fichier PDF
                        </label>
                        <input
                            type="file"
                            accept=".pdf"
                            onChange={(e) => setCvFile(e.target.files[0])}
                            className="block w-full text-sm text-gray-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded file:border-0
                                file:text-sm file:font-semibold
                                file:bg-cyan-50 file:text-cyan-700
                                hover:file:bg-cyan-100"
                        />
                    </div>

                    <button
                        onClick={handleCvUpload}
                        disabled={!cvFile || isUploading}
                        className={`px-4 py-2 rounded transition ${
                            isUploading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-cyan-500 hover:bg-cyan-600 text-white"
                        }`}
                    >
                        {isUploading ? "Upload en cours..." : "Uploader mon CV"}
                    </button>

                    {cvStatus && (
                        <p className={`text-sm mt-2 ${
                            cvStatus.includes("✅") ? "text-green-500" : "text-red-500"
                        }`}>
                            {cvStatus}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Admin;