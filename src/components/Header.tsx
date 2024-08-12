// src/components/Header.tsx

import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header-title">ramyasubramanian.com</h1>
      </div>
    </header>
  );
};

export default Header;
