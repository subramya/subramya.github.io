// src/components/Home.tsx

'use client';

import { useState } from 'react';
import '../styles/Home.css'; 
import Image from 'next/image';  
import headshotImage from '../assets/headshot.jpg';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import Skills from "../components/Skills"
import ExperienceCard from './ExperienceCard';
import Dimensional from '../assets/dimensional.png'
import CDSI from '../assets/cdsi.png'
import Header from '../components/Header';


const Home: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="main">
        <Header />

        {/* Circular headshot image */}
        <div className="headshot-container">
            <Image src={headshotImage} alt="Ramya Subramanian" className="headshot" />
        </div>

        <section className="description">
            <h1 className="home-title">Ramya Subramanian</h1>
            <h2 className="home-subtitle">Computer Science Student</h2>
            <p className="home-description">
            Hi! I'm Ramya, a student at Barnard College of Columbia University studying Computer Science and Economics. 
            Welcome to my website, where you can get a glimpse into my work in CS. Feel free to explore, and don't hesitate 
            to reach out to me at my email!
            </p>
        </section>
    
         {/* Icons for GitHub, LinkedIn, Email */}
        <div className="icon-container">
            <a href="https://github.com/subramya" target="_blank" rel="noopener noreferrer">
            <AiFillGithub className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/subramya/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className="icon" />
            </a>
            <a href="mailto:email2ramyas@gmail.com">
            <AiOutlineMail className="icon" />
            </a>
        </div>

        <Skills />  {/* Include the Skills component here */}

        <h2 className="section-title">Work Experience</h2>
        <div className="experience-container">
            <ExperienceCard
                title="Dimensional Fund Advisors"
                subtitle="Software Engineering Intern"
                description="Designed and implemented a Prospecting Engine to be deployed for the Sales and Marketing Technology group using various ML/NLP tools to conduct similarity matching."
                skills={['React', 'Python', 'Machine Learning', 'NLP', 'CSS', 'Typescript']}
                imageSrc={Dimensional} 
            />
            <ExperienceCard
                title="Columbia Data Science Institute"
                subtitle="Research Intern"
                description="Redesigned the front-end interface framework for calculating insurance payouts in Ethiopia in Typescript and Svelte, implementing interaction components for front-end framework."
                skills={['Python', 'Typescript', 'SQL']}
                imageSrc={CDSI}
            />
        </div>

    </div>
  );
};

export default Home;
