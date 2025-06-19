import React from "react";

const experiences = [
    {
        title: "Président du Club de Génie Logiciel",
        org: "CPGE MENAPLN Bobo",
        year: "2024 – aujourd’hui",
        desc: "Organisation d’ateliers tech, encadrement des membres, gestion de projets innovants"
    },
    {
        title: "Distributeur communautaire",
        org: "Ministère de la Santé",
        year: "2019 – aujourd’hui",
        desc: "Sensibilisation de +200 familles/an contre le paludisme saisonnier"
    },
    {
        title: "Équipe nationale – IMO 2023",
        org: "Olympiades internationales, Japon",
        year: "Juillet 2023",
        desc: "Sélection parmi les 40 meilleurs élèves du pays. Compétition mondiale."
    },
    {
        title: "Agent commercial",
        org: "Telecel Faso",
        year: "2021",
        desc: "Gestion des ventes, accueil client, amélioration des résultats (+15%)"
    }
];

const Experiences = () => {
    return (
        <section className="bg-gray-950 text-white py-16 px-6 md:px-20 fade-in">
    <h2 className="text-4xl font-bold text-cyan-400 mb-8 text-center">
        👨‍💼 Expériences
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
            <div 
                key={index}
                className="p-6 bg-gray-900 rounded-xl hover:bg-gray-800 transition duration-300 shadow-lg hover:shadow-cyan-500/20"
            >
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <span className="text-sm text-cyan-400">{exp.year}</span>
                </div>
                <p className="text-gray-400 mb-3">{exp.org}</p>
                <p className="text-gray-300 leading-relaxed">{exp.desc}</p>
            </div>
        ))}
    </div>
</section>

    );
};

export default Experiences;