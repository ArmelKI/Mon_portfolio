import React from "react";
import { motion } from "framer-motion";
import TechIcon from "../components/TechIcon";

const skills = [
    {
        section: "💻 Développement Logiciel",
        description:
            "Conception d’applications robustes, architecture modulaire et utilisation raisonnée des langages pour résoudre des problèmes concrets.",
        stack: [
            { name: "JavaScript", icon: "js", desc: "Langage principal pour logique front & back moderne." },
            { name: "Python", icon: "python", desc: "Manipulation de données, scripting et prototypage IA." },
            { name: "C", icon: "c", desc: "Optimisation bas-niveau, logique algorithmique et mémoire." },
            { name: "Git", icon: "git", desc: "Versioning, branches, merge, travail collaboratif propre." },
        ],
    },
    {
        section: "🌐 Front-End Web",
        description:
            "Interfaces interactives et accessibles, avec design system structuré, responsive, animations modernes.",
        stack: [
            { name: "HTML", icon: "html", desc: "Structure sémantique et SEO-friendly." },
            { name: "CSS", icon: "css", desc: "Mise en page, transitions, responsive clean." },
            { name: "React", icon: "react", desc: "Composants dynamiques, hooks, state/context API." },
            { name: "Tailwind", icon: "tailwind", desc: "Design ultra-rapide avec classes utilitaires." },
        ],
    },
    {
        section: "🛠️ Back-End & API",
        description:
            "Architecture serveur, gestion de fichiers, envois automatisés, sécurisation des échanges.",
        stack: [
            { name: "Node.js", icon: "node", desc: "Environnement rapide, scalable, modulaire." },
            { name: "Express", icon: "express", desc: "Routing, middlewares, APIs RESTful." },
            { name: "Multer", icon: "multer", desc: "Gestion avancée des fichiers (renommage, stockage)." },
            { name: "Nodemailer", icon: "email", desc: "Envois automatiques de mails avec pièces jointes." },
        ],
    },
    {
        section: "📊 Data Science & IA",
        description:
            "Analyse, visualisation, Machine Learning, pipelines de transformation et IA générative.",
        stack: [
            { name: "Pandas", icon: "pandas", desc: "Nettoyage, manipulation et fusion de datasets." },
            { name: "NumPy", icon: "numpy", desc: "Calcul numérique vectorisé, performance optimisée." },
            { name: "Scikit-learn", icon: "sklearn", desc: "Modèles prédictifs, classification, pipelines." },
            { name: "TensorFlow", icon: "tensorflow", desc: "Apprentissage profond, réseaux neuronaux." },
            { name: "Plotly", icon: "plotly", desc: "Visualisation interactive, dashboards analysables." },
        ],
    },
    {
        section: "☁️ Cloud & Déploiement",
        description:
            "Hébergement public, APIs en ligne, accessibilité mondiale, CI/CD minimaliste.",
        stack: [
            { name: "Render", icon: "render", desc: "Déploiement facile d’APIs Express (certifications, upload…)" },
            { name: "Vercel", icon: "vercel", desc: "Hosting du front avec CDN rapide et auto-build." },
        ],
    },
];

const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
};

const Skills = () => {
    return (
        <section className="bg-gray-950 text-white py-16 px-6 md:px-20">
            <motion.h2
                {...fadeIn}
                className="text-4xl font-bold text-cyan-400 mb-12 text-center"
            >
                🧠 Compétences Techniques
            </motion.h2>

            <div className="space-y-16">
                {skills.map((section, i) => (
                    <motion.div
                        key={i}
                        {...fadeIn}
                        transition={{ ...fadeIn.transition, delay: i * 0.2 }}
                        className="space-y-4"
                    >
                        <h3 className="text-2xl font-semibold text-cyan-300">{section.section}</h3>
                        <p className="text-gray-400">{section.description}</p>

                        <ul className="mt-4 grid sm:grid-cols-2 gap-4">
                            {section.stack.map((skill, j) => (
                                <li
                                    key={j}
                                    className="flex items-start gap-3 bg-gray-900/50 hover:bg-gray-800/80 transition-all p-4 rounded-lg"
                                >
                                    <TechIcon name={skill.icon} className="text-2xl shrink-0 mt-1" />
                                    <div>
                                        <p className="font-medium text-white">{skill.name}</p>
                                        <p className="text-sm text-gray-400">{skill.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
