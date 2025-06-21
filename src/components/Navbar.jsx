import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggle = () => setMenuOpen(!menuOpen);
    const close = () => setMenuOpen(false);

    const links = [
        { to: "/", label: "Accueil" },
        { to: "/about", label: "À propos" },
        { to: "/skills", label: "Compétences" },
        { to: "/experiences", label: "Expériences" },
        { to: "/certifications", label: "Certifications" },
        { to: "/projects", label: "Projets" },
        { to: "/contact", label: "Contact" }

    ];

    return (
        <header className="bg-gray-900 text-white shadow-md z-50 relative">
            <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
                <h1 className="text-xl font-bold text-cyan-400">Mon Portfolio</h1>

                <nav className="hidden md:flex gap-6 items-center">
                    {links.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            onClick={close}
                            className="hover:text-cyan-400 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="text-sm px-3 py-1 bg-cyan-600 hover:bg-cyan-400 text-black font-medium rounded"
                    >
                        {darkMode ? "☀️ Clair" : "🌙 Sombre"}
                    </button>
                </nav>

                {/* Burger menu */}
                <button
                    onClick={toggle}
                    className="text-2xl md:hidden focus:outline-none"
                    aria-label="Menu mobile"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile nav */}
            {menuOpen && (
                <nav className="md:hidden bg-gray-800 px-6 py-4 space-y-4 absolute top-full left-0 right-0">
                    {links.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            onClick={close}
                            className="block text-lg hover:text-cyan-400"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <button
                        onClick={() => {
                            setDarkMode(!darkMode);
                            close();
                        }}
                        className="text-sm w-full px-3 py-1 bg-cyan-600 hover:bg-cyan-400 text-black font-medium rounded"
                    >
                        {darkMode ? "☀️ Mode clair" : "🌙 Mode sombre"}
                    </button>
                </nav>
            )}
        </header>
    );
};

export default Navbar;