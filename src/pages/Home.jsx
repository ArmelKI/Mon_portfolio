import React from "react";

const Home = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-950 text-white px-6 md:px-20">
            <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-400 mb-4 animate-fadeIn">
                KI Armel Stéphane Novak
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-6">
                👨‍🎓 Étudiant en prépa MP passionné par l'
                <span className="text-emerald-400 font-semibold">IA</span>, la{' '}
                <span className="text-emerald-400 font-semibold">data science</span> et le{' '}
                <span className="text-emerald-400 font-semibold">développement logiciel</span>.
            </p>

            <p className="text-md md:text-lg text-gray-400 max-w-2xl leading-relaxed mb-4">
                🧠 J'entraîne des IA. J'analyse des données. Je conçois des interfaces interactives.
            </p>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-300">
                <div className="bg-gray-800 p-4 rounded shadow-md hover:bg-gray-700 transition">
                    📈 <strong className="text-cyan-400">+20</strong><br />certifications
                </div>
                <div className="bg-gray-800 p-4 rounded shadow-md hover:bg-gray-700 transition">
                    🤖 <strong className="text-cyan-400">12+</strong><br />projets IA
                </div>
                <div className="bg-gray-800 p-4 rounded shadow-md hover:bg-gray-700 transition">
                    📊 <strong className="text-cyan-400">50k+</strong><br />lignes de données
                </div>
                <div className="bg-gray-800 p-4 rounded shadow-md hover:bg-gray-700 transition">
                    🌍 <strong className="text-cyan-400">3</strong><br />collaborations internationales
                </div>
            </div>

            <a
                href="http://localhost:5000/uploads/Curriculum_Vitae_KI_Armel_Stephane_Novak.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 px-6 py-3 bg-cyan-500 text-white text-lg rounded-lg shadow-lg hover:bg-cyan-600 transition flex items-center gap-2"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Télécharger mon CV
            </a>

            <p className="mt-8 text-sm text-gray-500 animate-bounce">
                👇 Découvre mes compétences, projets et ambitions
            </p>
        </section>
    );
};

export default Home;