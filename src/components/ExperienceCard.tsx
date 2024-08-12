// src/components/ExperienceCard.tsx

import React from 'react';
import '../styles/ExperienceCard.css'; 
import Image, { StaticImageData } from 'next/image';

interface ExperienceCardProps {
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  imageSrc: StaticImageData;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, subtitle, description, skills, imageSrc}) => {
  return (
    <div className="experience-card">
      <Image src={imageSrc} className="experience-image" width={90} height={90} />
      <h3 className="experience-title">{title}</h3>
      <p className="experience-subtitle">{subtitle}</p>
      <p className="experience-description">{description}</p>
      <div className="experience-skills">
        {skills.map((skill, index) => (
          <div key={index} className="skill-pill">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
