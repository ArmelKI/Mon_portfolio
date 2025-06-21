import React, { useState } from "react";
import { FaPython, FaGithub, FaDatabase, FaBrain, FaGlobe } from "react-icons/fa";
import { SiPlotly, SiPandas, SiReact, SiKaggle } from "react-icons/si";

const projects = [
    {
        title: "Analyse COVID-19",
        link: "https://github.com/ArmelKI/covid19-data-analysis",
        tech: [<FaPython />, <SiPlotly />, <SiPandas />],
        type: "data",
        desc: "Extraction automatisée des données OWID, visualisations dynamiques (cas, décès) avec Plotly, analyse comparative France/USA/Russie/AFS.",
    },
    {
        title: "Titanic Survivors",
        link: "https://github.com/ArmelKI/titanic-analysis",
        tech: [<FaPython />, <SiKaggle />, <SiPandas />],
        type: "data",
        desc: "Exploration du dataset Titanic : nettoyage, visualisation, corrélations âge/genre/classe/survie. Premiers pas vers la modélisation prédictive.",
    },
    {
        title: "Site du Centre de Compétences Pluridisciplinaires",
        link: "https://github.com/exemplede/CCPS",
        tech: [<FaGlobe />, <SiReact />],
        type: "web",
        desc: "Site vitrine collaboratif pour l'Université Nazi Boni. Focus sur l'ergonomie, la mise en avant des activités et le déploiement web.",
    },
    {
        title: "Portfolio personnel",
        link: "https://github.com/ArmelKI/Mon_portfolio",
        tech: [<SiReact />, <FaBrain />],
        type: "web",
        desc: "Portfolio interactif avec React + Tailwind. Navigation fluide, animations, responsive design. Showcase de projets IA/Data.",
    },
];

const Projects = () => {
    const [filter, setFilter] = useState("all");
    const filtered = filter === "all" 
        ? projects 
        : projects.filter(p => p.type === filter);

    return (
        <section className="bg-gray-950 text-white py-16 px-6 md:px-20 fade-in">
            <h2 className="text-4xl font-bold text-cyan-400 mb-10">
                📁 Mes Projets
            </h2>

            <div className="flex gap-4 mb-8 flex-wrap">
                {["all", "web", "data"].map(type => (
                    <button
                        key={type}
                        onClick={() => setFilter(type)}
                        className={`px-4 py-2 rounded-full text-sm ${
                            filter === type 
                                ? "bg-cyan-400 text-black font-bold" 
                                : "bg-gray-800"
                        } transition`}
                    >
                        {type === "all" ? "Tous" : type.toUpperCase()}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {filtered.map((project, i) => (
                    <a
                        key={i}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-900 p-6 rounded-xl hover:scale-[1.02] shadow-lg hover:shadow-cyan-500/20 transition block"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-xl font-semibold text-cyan-300">
                                {project.title}
                            </h3>
                            <span className="flex gap-2 text-lg">
                                {project.tech}
                            </span>
                        </div>
                        <p className="text-gray-300 text-sm">
                            {project.desc}
                        </p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;