import React, { useState, useEffect } from "react";
import {
    FaShieldAlt,
    FaCloud,
    FaBrain,
    FaChartBar,
    FaMobileAlt,
    FaRobot,
    FaFilePdf,
    FaCheckCircle,
} from "react-icons/fa";

const categoryLabels = {
    all: "Tout",
    ai: "IA",
    data: "Data",
    cyber: "Cyber",
    mobile: "Mobile",
    cloud: "Cloud",
    finance: "Finance",
    web: "Web",
};

const Certifications = () => {
    const [certificationsData, setCertificationsData] = useState([]);
    const [expanded, setExpanded] = useState(null);
    const [activeCategory, setActiveCategory] = useState("all");

    useEffect(() => {
        fetch("http://localhost:5000/api/certifications")
            .then((res) => res.json())
            .then((data) => setCertificationsData(data))
            .catch((err) => console.error("Erreur API 🔥:", err));
    }, []);

    const filteredCertifs = certificationsData.filter(
        (certif) => activeCategory === "all" || certif.category === activeCategory
    );

    const getIcon = (category) => {
        switch (category) {
            case "cyber": return <FaShieldAlt className="text-cyan-400" />;
            case "data": return <FaChartBar className="text-cyan-400" />;
            case "mobile": return <FaMobileAlt className="text-cyan-400" />;
            case "ai": return <FaRobot className="text-cyan-400" />;
            case "cloud": return <FaCloud className="text-cyan-400" />;
            case "brain": return <FaBrain className="text-cyan-400" />;
            case "finance": return <FaChartBar className="text-cyan-400" />;
            case "web": return <FaCheckCircle className="text-cyan-400" />;
            default: return null;
        }
    };

    return (
        <section className="py-12 px-6 md:px-20 bg-gray-100 dark:bg-gray-950 min-h-screen">
            <h2 className="text-4xl font-bold text-cyan-500 mb-8">📜 Certifications</h2>

            {/* Filtres */}
            <div className="mb-10 flex flex-wrap gap-3">
                {Object.keys(categoryLabels).map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                            activeCategory === cat
                                ? "bg-cyan-500 text-white border-cyan-500"
                                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-cyan-100 dark:hover:bg-gray-700"
                        }`}
                    >
                        {categoryLabels[cat]}
                    </button>
                ))}
            </div>

            {/* Cartes */}
            <div className="grid gap-6 md:grid-cols-2">
                {filteredCertifs.map((certif, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-800 hover:shadow-cyan-500/20 transition-all"
                    >
                        <div className="flex items-start gap-4">
                            <div className="text-3xl">{getIcon(certif.category)}</div>

                            <div className="flex-1">
                                <h3 className="text-lg font-semibold">{certif.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {certif.provider} • {certif.date} • {certif.duration}
                                </p>

                                <ul className="mt-2 flex flex-wrap gap-2 text-xs text-cyan-800 dark:text-cyan-300">
                                    {certif.skills?.map((skill, i) => (
                                        <li
                                            key={i}
                                            className="bg-cyan-100 dark:bg-cyan-900/20 px-2 py-1 rounded"
                                        >
                                            {skill}
                                        </li>
                                    ))}
                                </ul>

                                {expanded === index && (
                                    <p className="mt-3 text-sm text-gray-700 dark:text-gray-200">
                                        {certif.description}
                                    </p>
                                )}

                                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
                                    {certif.pdf && (
                                        <a
                                            href={`http://localhost:5000${certif.pdf}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-cyan-500 hover:underline"
                                        >
                                            <FaFilePdf className="text-red-500" /> Certificat
                                        </a>
                                    )}
                                    {certif.verifyUrl && (
                                        <a
                                            href={certif.verifyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-green-500 hover:underline"
                                        >
                                            Vérifier
                                        </a>
                                    )}
                                    <button
                                        onClick={() => setExpanded(expanded === index ? null : index)}
                                        className="text-cyan-400 hover:underline"
                                    >
                                        {expanded === index ? "▲ Voir moins" : "▼ Voir plus"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {filteredCertifs.length === 0 && (
                    <p className="text-center col-span-2 text-gray-500 dark:text-gray-400 mt-6">
                        Aucun résultat pour cette catégorie.
                    </p>
                )}
            </div>
        </section>
    );
};

export default Certifications;
