import React from "react";

const About = () => {
    return (
        <section className="bg-gray-950 text-white py-16 px-6 md:px-20">
            <h2 className="text-4xl font-bold text-cyan-400 mb-10">
                👤 À propos de moi
            </h2>

            <div className="flex flex-col md:flex-row gap-10 items-start">
                <img
                    src="/images/profil-armel.jpg"
                    alt="Armel KI - Étudiant en IA et développement"
                    className="w-full md:w-1/3 rounded-lg shadow-lg object-cover hover:scale-[1.02] transition-transform"
                />

                <div className="flex-1 space-y-6">
                    <p className="text-lg text-gray-300 leading-7">
                        🎓 Étudiant en classes préparatoires MP au Burkina Faso avec une passion profonde pour 
                        l'intelligence artificielle, la science des données et le développement web.
                    </p>

                    <p className="text-lg text-gray-300 leading-7">
                        💡 Mon objectif : devenir ingénieur IA/Data Scientist capable de concevoir des solutions 
                        éthiques et innovantes pour répondre aux défis sociétaux.
                    </p>

                    <p className="text-lg text-gray-300 leading-7">
                        🎯 Fort en mathématiques et en algorithmique, je développe des interfaces modernes 
                        et des systèmes intelligents adaptés aux besoins réels.
                    </p>

                    <a
                        href="http://localhost:5000/uploads/Curriculum_Vitae_KI_Armel_Stephane_Novak.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-2 px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition shadow-md"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Télécharger mon CV
                    </a>
                </div>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
                <div className="bg-gray-900 p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold text-cyan-300 mb-4">
                        🧠 Soft Skills
                    </h3>
                    <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-2">
                            <span className="text-cyan-400">▹</span>
                            <span>Leadership : Président du club de génie logiciel</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-cyan-400">▹</span>
                            <span>Collaboration : Travail en équipe agile</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-cyan-400">▹</span>
                            <span>Résilience : Apprentissage autonome</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-cyan-400">▹</span>
                            <span>Curiosité : Veille technologique constante</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-cyan-400">▹</span>
                            <span>Esprit critique : Analyse de problèmes complexes</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-gray-900 p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold text-cyan-300 mb-4">
                        🧰 Stack Technique
                    </h3>
                    <div className="space-y-2 text-gray-300">
                        <p>
                            <strong className="text-white">Frontend:</strong> React, Tailwind CSS
                        </p>
                        <p>
                            <strong className="text-white">Backend:</strong> Node.js, Express
                        </p>
                        <p>
                            <strong className="text-white">Data:</strong> Python, Pandas, Scikit-learn
                        </p>
                        <p>
                            <strong className="text-white">BDD:</strong> MongoDB, PostgreSQL
                        </p>
                    </div>
                </div>

                <div className="bg-gray-900 p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold text-cyan-300 mb-4">
                        🎯 Centres d'intérêt
                    </h3>
                    <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-2">
                            <span>📺</span>
                            <span>Anime & Manga (One Piece, AOT)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span>🏀</span>
                            <span>Basketball en compétition</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span>🤖</span>
                            <span>IA générative & NLP</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span>📊</span>
                            <span>Visualisation de données</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span>💻</span>
                            <span>UI/UX Design</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;