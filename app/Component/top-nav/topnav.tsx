import React, { useState, useEffect } from 'react';
import './topnav.css';

export default function Topnav() {
  const [activeSection, setActiveSection] = useState('');

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['profil', 'competences', 'projets'];
      let currentSection = '';

      // Detect which section is in the viewport
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) { // Adjust as necessary
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='contenuNav'>
      <h2 className='GrosTitres'> <div className="NOM"> Kiady </div> Nekena</h2>
      <ul className='ulNav'>
        <li className={`liNav ${activeSection === 'profil' ? 'active' : ''}`}>
          <a href="#profil">À propos</a>
        </li>
        <li className={`liNav ${activeSection === 'competences' ? 'active' : ''}`}>
          <a href="#competences">Compétences</a>
        </li>
        <li className={`liNav ${activeSection === 'projets' ? 'active' : ''}`}>
          <a href="#projets">Projets</a>
        </li>
      </ul>
    </div>
  );
}
