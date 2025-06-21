import React, { useEffect, useState } from "react";

const BASE_URL = "http://localhost:5000"; // Changeable si tu héberges plus tard

const AdminFichiers = () => {
    const [fichiers, setFichiers] = useState([]);
    const [chargement, setChargement] = useState(true);
    const [filtre, setFiltre] = useState("");

    useEffect(() => {
        const fetchFichiers = async () => {
            try {
                const res = await fetch(`${BASE_URL}/api/fichiers`);
                const data = await res.json();
                setFichiers(data.fichiers);
            } catch (error) {
                console.error("Erreur récupération fichiers :", error);
            } finally {
                setChargement(false);
            }
        };

        fetchFichiers();
    }, []);

    const fichiersFiltres = fichiers.filter((f) =>
        f.nom.toLowerCase().includes(filtre.toLowerCase())
    );

    return (
        <section className="bg-gray-950 text-white py-16 px-6 md:px-20">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">📂 Fichiers reçus</h2>

            <input
                type="text"
                placeholder="🔍 Filtrer par nom..."
                value={filtre}
                onChange={(e) => setFiltre(e.target.value)}
                className="mb-6 px-4 py-2 rounded bg-gray-800 text-white w-full md:w-1/2 border border-gray-700"
            />

            {chargement ? (
                <p className="text-gray-400">⏳ Chargement des fichiers en cours...</p>
            ) : fichiersFiltres.length === 0 ? (
                <p className="text-gray-400">Aucun fichier trouvé.</p>
            ) : (
                <div className="overflow-x-auto border border-gray-700 rounded">
                    <table className="min-w-full text-sm text-left table-auto">
                        <thead className="bg-gray-800 text-cyan-300">
                            <tr>
                                <th className="px-4 py-3 border-b border-gray-700">Nom</th>
                                <th className="px-4 py-3 border-b border-gray-700">Télécharger</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-300 divide-y divide-gray-700">
                            {fichiersFiltres.map((fichier, index) => (
                                <tr key={index} className="hover:bg-gray-800 transition">
                                    <td className="px-4 py-2 font-mono">{fichier.nom}</td>
                                    <td className="px-4 py-2">
                                        <a
                                            href={`${BASE_URL}${fichier.lien}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-cyan-400 hover:underline"
                                        >
                                            📥 Télécharger
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    );
};

export default AdminFichiers;
