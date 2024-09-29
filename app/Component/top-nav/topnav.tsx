import React from 'react';
import './topnav.css';

export default function Topnav() {
  return (
    <div className='contenuNav'>
      <ul className='ulNav'>
        <li className='liNav1'>Rabenjatovo</li>
        <li className='liNav'><a href="#profil">À propos</a></li> {/* Lien vers la section Profil */}
        <li className='liNav'><a href="#projets">Projets</a></li> {/* Lien vers la section Projets */}
      </ul>
    </div>
  )
}
