import React, { useEffect } from 'react';
import { FaPython, FaJsSquare, FaReact, FaAngular, FaNodeJs, FaAws, FaJava, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaBootstrap, FaDocker} from 'react-icons/fa';
import { DiDjango } from 'react-icons/di'; // Django icon from the Di (Devicons) set
import { BiLogoGoLang } from "react-icons/bi";
import { FcLinux } from "react-icons/fc";
import { SiCsharp, SiDotnet } from 'react-icons/si';
import { SiMysql } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import './technologies.scss';

const techIcons = [
    { icon: <FaHtml5 className="fa-html" />, alt: 'Html' },
    { icon: <SiCsharp className="si-csharp" />, alt: 'C#' }, // C# icon
    { icon: <SiDotnet className="si-dotnet" />, alt: '.NET' }, // .NET icon
    { icon: <FaJava className="fa-java" />, alt: 'Java' },
    { icon: <FcLinux className="fc-linux" />, alt: 'Linux' },
    { icon: <SiMysql className="si-mysql" />, alt: 'Mysql' },
    { icon: <FaPython className="fa-python" />, alt: 'Python' },
    { icon: <FaJsSquare className="fa-js-square" />, alt: 'JavaScript' },
    { icon: <FaReact className="fa-react" />, alt: 'React' },
    { icon: <FaAngular className="fa-angular" />, alt: 'Angular' },
    { icon: <FaNodeJs className="fa-nodejs" />, alt: 'Node.js' },
    { icon: <SiTypescript className="si-typescript" />, alt: 'Typescript' },
    { icon: <DiDjango className="di-django" />, alt: 'Django' },
    { icon: <FaAws className="fa-aws" />, alt: 'AWS' },
    { icon: <SiMongodb className="si-mongodb" />, alt: 'Mongodb' },
    { icon: <FaGithub className="fa-github" />, alt: 'GitHub' },
    { icon: <BiLogoGoLang className="bi-logogolang" />, alt: 'Golang' },
    { icon: <FaGitAlt className="fa-git" />, alt: 'Git' },
    { icon: <DiPostgresql className="di-postgresql" />, alt: 'Postgresql' },
    { icon: <FaCss3Alt className="fa-css" />, alt: 'Css' },
];

const Technologies = () => {
    useEffect(() => {
        const techIcons = document.querySelectorAll('.tech-icon');
        techIcons.forEach(icon => {
            const randomDelay = Math.random() * 5; // Random delay between 0 and 5 seconds
            icon.style.animationDelay = `${randomDelay}s`;
        });
    }, []);

    return (
        <div className="container">
        <div className="technologies">
            {techIcons.map((tech, index) => (
                <div key={index} className="tech-icon">
                    {tech.icon}
                </div>
            ))}
        </div>
        </div>
    );
};

export default Technologies;