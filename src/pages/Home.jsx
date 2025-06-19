import React from "react";

const Home = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fadeIn">
                KI Armel Stéphane Novak
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
                Data Scientist & Ingénieur IA en devenir
            </p>
            <a
                href="/cv.pdf"
                className="mt-6 px-6 py-3 bg-cyan-500 text-white rounded-lg shadow-md hover:bg-cyan-400 transition duration-300"
                download="CV_KI_Armel_Stephane_Novak.pdf"
            >
                📄 Télécharger mon CV
            </a>
        </div>
    );
};

export default Home;