// src/components/Skills.tsx

import React from 'react';
import { SiPython, SiRstudio, SiCplusplus, SiJavascript, SiHtml5, SiCss3, SiSwift, SiReact, SiNextdotjs, SiChakraui, SiTailwindcss, SiFlask, SiDjango, SiFirebase, SiHeroku, SiVercel, SiAmazonaws, SiGit, SiPostman } from 'react-icons/si';
import '../styles/Skills.css';  // Import the CSS file
import { DiJava } from 'react-icons/di';

const Skills: React.FC = () => {
  return (
    <div className="skills-section">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-category">
        <h3>Coding Languages</h3>
        <div className="skills-grid">
          <div className="skill-card">
            <SiPython />
            <p>Python</p>
          </div>
          <div className="skill-card">
            <DiJava />
            <p>Java</p>
          </div>
          <div className="skill-card">
            <SiRstudio />
            <p>R</p>
          </div>
          <div className="skill-card">
            <SiCplusplus />
            <p>C / C++</p>
          </div>
          <div className="skill-card">
            <SiJavascript />
            <p>JavaScript</p>
          </div>
          <div className="skill-card">
            <SiHtml5 />
            <p>HTML</p>
          </div>
          <div className="skill-card">
            <SiCss3 />
            <p>CSS</p>
          </div>
        </div>
      </div>

      <div className="skills-category">
        <h3>Frontend, UI Libraries, and Frameworks</h3>
        <div className="skills-grid">
          <div className="skill-card">
            <SiReact />
            <p>React</p>
          </div>
          <div className="skill-card">
            <SiTailwindcss />
            <p>Tailwind CSS</p>
          </div>
        </div>
      </div>

      <div className="skills-category">
        <h3>Production Testing and Tools</h3>
        <div className="skills-grid">
          <div className="skill-card">
            <SiVercel />
            <p>Vercel</p>
          </div>
          <div className="skill-card">
            <SiGit />
            <p>Git</p>
          </div>
          <div className="skill-card">
            <SiPostman />
            <p>Postman</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
