// src/pages/Certifications.js
import React from "react";

const certifications = [
    {
        title: "Introduction to Data Analytics in Google Cloud",
        platform: "Google Cloud",
        description: "Découverte des outils Google pour analyser et interpréter les données sur le cloud. Utilisation de BigQuery, compréhension du pipeline de données.",
        feedback: "Très bonne base pour comprendre comment fonctionne l'analyse de données dans un environnement cloud moderne.",
        category: "Data Science"
    },
    {
        title: "Introduction to Cybersecurity Careers",
        platform: "Cisco",
        description: "Introduction aux métiers de la cybersécurité, aux concepts de base (attaques, défenses, rôles).",
        feedback: "Utile pour avoir une vue globale sur les métiers de la cybersécurité. J'ai pu confirmer mon intérêt pour cette spécialité.",
        category: "Cybersécurité"
    },
    {
        title: "FORCE-N – IA pour tous",
        platform: "FORCE-N",
        description: "Notions générales sur l'intelligence artificielle, ses applications, ses risques et ses enjeux sociaux.",
        feedback: "Accessible mais engageant. Un excellent point de départ pour vulgariser l'IA auprès du grand public.",
        category: "Intelligence Artificielle"
    }
];

const Certifications = () => {
    return (
        <section className="bg-gray-950 text-white py-16 px-6 md:px-20 fade-in">
            <h2 className="text-4xl font-bold text-cyan-400 mb-10">
                📜 Certifications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {certifications.map((cert, index) => (
                    <div 
                        key={index}
                        className="bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition duration-300 hover:shadow-cyan-500/10"
                    >
                        <div className="mb-4">
                            <h3 className="text-xl font-semibold text-white mb-1">
                                {cert.title}
                            </h3>
                            <p className="text-sm text-cyan-400">
                                📍 {cert.platform} • {cert.category}
                            </p>
                        </div>
                        
                        <div className="space-y-3">
                            <div>
                                <p className="text-xs font-medium text-gray-400 mb-1">
                                    CE QUE J'AI APPRIS
                                </p>
                                <p className="text-sm text-gray-300">
                                    {cert.description}
                                </p>
                            </div>
                            
                            <div>
                                <p className="text-xs font-medium text-gray-400 mb-1">
                                    MON RETOUR
                                </p>
                                <p className="text-sm text-gray-300 italic">
                                    {cert.feedback}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;