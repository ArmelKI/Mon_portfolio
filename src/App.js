import React from "react";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Certifications from "./pages/Certifications";
import Experiences from "./pages/Experiences";

function App() {
    return (
        <div className="bg-gray-900 text-white font-sans">
            <Home />
            <About />
            <Skills />
            <Certifications />
            <Experiences />
        </div>
    );
}

export default App;