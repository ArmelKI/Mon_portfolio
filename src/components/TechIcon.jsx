import React from "react";
import {
    FaPython,
    FaReact,
    FaDatabase,
    FaGithub,
    FaHtml5,
    FaCss3Alt,
    FaCloud ,
    FaJsSquare,
    FaBrain,
    FaLinux,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiTensorflow,
    SiGooglecloud,
    SiPandas,
    SiNumpy,
    SiPlotly,
    SiFastapi,
    SiDocker,
    SiPostgresql,
    SiMysql,
    SiScikitlearn,
} from "react-icons/si";

const icons = {
    python: <FaPython />,
    react: <FaReact />,
    html: <FaHtml5 />,
    css: <FaCss3Alt />,
    js: <FaJsSquare />,
    tailwind: <SiTailwindcss />,
    docker: <SiDocker />,
    azure: <FaCloud />,
    mysql: <SiMysql />,
    postgres: <SiPostgresql />,
    gcp: <SiGooglecloud />,
    pandas: <SiPandas />,
    numpy: <SiNumpy />,
    plotly: <SiPlotly />,
    fastapi: <SiFastapi />,
    tensorflow: <SiTensorflow />,
    sklearn: <SiScikitlearn />,
    brain: <FaBrain />,
    db: <FaDatabase />,
    linux: <FaLinux />,
    github: <FaGithub />,
};

const TechIcon = ({ name, size = 20, color = "white", className = "" }) => {
    return (
        <span className={`inline-flex items-center ${className}`} style={{ fontSize: size, color }}>
            {icons[name] || null}
        </span>
    );
};

export default TechIcon;