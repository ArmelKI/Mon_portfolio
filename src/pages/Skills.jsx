import React, { useEffect, useState } from "react";

const skills = [
    { name: "Python", category: "Langage", color: "bg-yellow-500 hover:bg-yellow-600" },
    { name: "C", category: "Langage", color: "bg-blue-500 hover:bg-blue-600" },
    { name: "JavaScript", category: "Langage", color: "bg-green-500 hover:bg-green-600" },
    { name: "SQL", category: "Langage", color: "bg-red-500 hover:bg-red-600" },
    { name: "React", category: "Framework", color: "bg-purple-500 hover:bg-purple-600" },
    { name: "Node.js", category: "Framework", color: "bg-gray-500 hover:bg-gray-600" },
    { name: "Django", category: "Framework", color: "bg-indigo-500 hover:bg-indigo-600" },
];

const Skills = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 100) {
                setVisible(true);
            }
        };
        
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`min-h-screen bg-gray-900 text-white flex flex-col items-center p-10 ${visible ? "fade-in visible" : "fade-in"}`}>
            <h2 className="text-4xl font-bold mb-12 hover:text-cyan-400 transition duration-300">
                ⚡ Compétences
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-xl shadow-lg ${skill.color} text-center hover:scale-105 transition-all duration-300 cursor-pointer`}
                    >
                        <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                        <p className="text-sm text-gray-100 bg-black/20 rounded-full px-3 py-1 inline-block">
                            {skill.category}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
