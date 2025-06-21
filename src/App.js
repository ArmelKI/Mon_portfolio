import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Certifications from "./pages/Certifications";
import Experiences from "./pages/Experiences";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin"; 
import "./styles/tailwind.css";
import AdminFichiers from "./pages/AdminFichiers"; 


function App() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    return (
        <div className={darkMode ? "dark" : ""}>
            <Router>
                <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                <div className="p-6 min-h-screen transition-colors duration-300 bg-gray-100 dark:bg-gray-950">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/certifications" element={<Certifications />} />
                        <Route path="/experiences" element={<Experiences />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route path="/AdminFichiers" element={<AdminFichiers/>} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;