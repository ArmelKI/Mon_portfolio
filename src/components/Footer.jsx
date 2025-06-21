import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 px-6 mt-10 text-sm">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                {/* Punchline */}
                <p className="text-gray-400 text-center md:text-left">
                    Réfléchi comme un scientifique, créatif comme un artiste, humain comme un ingénieur.
                </p>

                {/* Réseaux */}
                <div className="flex gap-5 text-xl text-cyan-400">
                    <a
                        href="https://github.com/ArmelKI"
                        target="_blank"
                        rel="noreferrer"
                        title="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/armelki"
                        target="_blank"
                        rel="noreferrer"
                        title="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="mailto:kiarmelstephanenovak@gmail.com"
                        title="Email"
                    >
                        <FaEnvelope />
                    </a>
                    <a
                        href="https://discord.gg/yQPkwGgf"
                        target="_blank"
                        rel="noreferrer"
                        title="Rejoindre mon salon Discord"
                    >
                        <FaDiscord />
                    </a>
                </div>
            </div>

            <div className="text-center mt-4 text-gray-500">
                Dernière mise à jour © {new Date().getFullYear()} — Code and design by Armel with React
            </div>
        </footer>
    );
};

export default Footer;