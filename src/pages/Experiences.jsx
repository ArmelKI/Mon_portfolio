import React from "react";
import TechIcon from "../components/TechIcon";

<TechIcon name="python" size={24} color="#ffd343" className="mr-2" />


const experiences = [
    {
        title: "Président du Club de Génie Logiciel",
        org: "CPGE MENAPLN Bobo",
        year: "2024 – Aujourd’hui",
        desc: "Organisation d'ateliers tech, encadrement des membres, gestion de projets innovants et diffusion de la culture du génie logiciel."
    },
    {
        title: "Distributeur Communautaire",
        org: "Ministère de la Santé, Burkina Faso",
        year: "2019 – Aujourd’hui",
        desc: "Participation à la Chimioprévention du Paludisme Saisonnier. Sensibilisation de +200 familles/an à l'hygiène et à la gestion des traitements."
    },
    {
        title: "Olympiades Internationales de Mathématiques (IMO)",
        org: "Équipe nationale du Burkina Faso",
        year: "Juillet 2023",
        desc: "Sélection parmi les 40 meilleurs élèves du pays. Participation à l'IMO 2023 à Chiba, Japon, avec résolution de problèmes mathématiques avancés."
    },
    {
        title: "Agent Commercial",
        org: "Telecel Faso",
        year: "Août – Septembre 2021",
        desc: "Accueil client, vente de produits et offres promotionnelles, optimisation des stocks. +15 % de ventes pendant la période."
    }
];

const Experiences = () => {
    return (
        <section className="bg-gray-950 text-white py-16 px-6 md:px-20 fade-in">
            <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">
                👨‍💼 Expériences
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition duration-300"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-semibold text-white">
                                {exp.title}
                            </h3>
                            <span className="text-sm text-cyan-400 whitespace-nowrap">
                                {exp.year}
                            </span>
                        </div>
                        <p className="text-sm text-gray-400 mb-1">
                            {exp.org}
                        </p>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            {exp.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experiences;