"use client";
import React from "react";
import Topnav from "./Component/top-nav/topnav";
import Image from "next/image";
import MailsIcons from "./icon/mail/Mail";
import { FaWhatsapp } from "react-icons/fa";
import GitIcons from "./icon/git/Git";
import LinkdinIcons from "./icon/linkdin/Linkdin";
import DownloadIcons from "./icon/download/Download";
import ReactIcons from "./icon/react/react";
import HTMLIcons from "./icon/Html/Html";
import CssIcons from "./icon/Css/Css";
import NodeJs from "./icon/NodeJS/nodeJs";
import PythonIcons from "./icon/python/python";
import MySqlIcons from "./icon/Mysql/MySql";
import TypeScipteIcons from "./icon/TypeScipte/TypeScripte";
import FireBaseIcons from "./icon/firebases/firebases";
import JavaIcons from "./icon/Java/Java";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen">
      <Topnav />

      <div id="profil" className="profil px-6 py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
          <img src="./image/Kex.JPEG" alt="Profil Image" className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-500 shadow-xl animate-fade-in-up" />
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
              Je suis Full-Stack <br /> JavaScript Developer
            </h1>
            <p className="text-gray-300 text-lg mb-8 md:px-0 animate-fade-in-up delay-150">
              Développeur passionné et motivé, ravi d'accroître mes compétences en tant que développeur afin d'offrir des solutions innovantes. <br />Actuellement en troisième année à l'ISPM.
            </p>

            <h2 className="text-3xl font-bold text-blue-400 mb-6 animate-fade-in-up delay-300">Contactez-moi</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center animate-fade-in-up delay-500">
              <button
                onClick={() => window.location.href = "mailto:rabenjatovokex@gmail.com?subject=Bonjour&body=Je voudrais discuter"}
                className="bg-blue-600 px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-blue-700 transition duration-300"
              >
                <MailsIcons /> Mail
              </button>
              <button
                onClick={() => window.open('https://wa.me/+2610348570625', '_blank')}
                className="bg-green-600 px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-green-700 transition duration-300"
              >
                <FaWhatsapp /> WhatsApp
              </button>
              <button
                onClick={() => window.open('https://github.com/kex23', '_blank')}
                className="bg-gray-700 px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-gray-600 transition duration-300"
              >
                <GitIcons /> GitHub
              </button>
              <button
                onClick={() => window.open('https://linkedin.com/in/kiady-rabenjatovo-441344305', '_blank')}
                className="bg-blue-800 px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-blue-900 transition duration-300"
              >
                <LinkdinIcons /> LinkedIn
              </button>
              <button
                onClick={() => window.open('./PROFIL PERSONNEL cv kex.pdf', '_blank')}
                className="bg-yellow-400 text-black px-5 py-3 rounded-xl flex items-center gap-2 hover:bg-yellow-500 transition duration-300 col-span-2 md:col-span-1"
              >
                <DownloadIcons /> Télécharger CV
              </button>
            </div>
          </div>
        </div>
      </div>


      <div id="competences" className="px-6 py-20 bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-400 animate-fade-in-up">Compétences</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center animate-fade-in-up delay-200">
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/50 transition">
            <h3 className="text-xl font-semibold mb-4 text-blue-300">Frontend</h3>
            <p className="flex items-center justify-center gap-2 mb-2"><ReactIcons width={40}/> React</p>
            <p className="flex items-center justify-center gap-2 mb-2"><HTMLIcons width={40}/> HTML</p>
            <p className="flex items-center justify-center gap-2"><CssIcons width={40}/> CSS</p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/50 transition">
            <h3 className="text-xl font-semibold mb-4 text-blue-300">Backend</h3>
            <p className="flex items-center justify-center gap-2 mb-2"><NodeJs width={40}/> NodeJS</p>
            <p className="flex items-center justify-center gap-2 mb-2"><PythonIcons width={40}/> Python</p>
            <p className="flex items-center justify-center gap-2"><MySqlIcons width={40}/> MySQL</p>
            <p className="flex items-center justify-center gap-2"><JavaIcons width={40}/> JAVA</p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/50 transition">
            <h3 className="text-xl font-semibold mb-4 text-blue-300">Autre</h3>
            <p className="flex items-center justify-center gap-2 mb-2"><GitIcons width={40}/> Git</p>
            <p className="flex items-center justify-center gap-2 mb-2"><TypeScipteIcons width={40}/> TypeScript</p>
            <p className="flex items-center justify-center gap-2"><FireBaseIcons width={40}/> Firebase</p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/50 transition">
            <h3 className="text-xl font-semibold mb-4 text-blue-300">Mobile</h3>
            <p className="flex items-center justify-center gap-2"><ReactIcons width={40}/> React Native</p>
          </div>
        </div>
      </div>

      <div id="projets" className="px-6 py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-400 animate-fade-in-up">Mes Projets</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 animate-fade-in-up delay-200">
          {[
            {
              src: './image/clinique.png',
              title: 'Clinique Management',
              desc: 'Logiciel pour la gestion de stock de médicaments et dossiers patients.'
            },
            {
              src: './image/shopticket.png',
              title: 'Shop Ticket',
              desc: 'Publication d\'\u00e9vénements avec billetterie en ligne.'
            },
            {
              src: './image/Mikozy.jpg',
              title: 'Mikozy',
              desc: 'Application mobile pour partager messages et photos.'
            },
            {
              src: './image/beer-Pong.jpg',
              title: 'Beer Pong',
              desc: 'Jeu Windows basé sur le lancer de balles dans des gobelets.'
            },
            {
              src: './image/d5c797ea-5541-47d5-9e97-4d7497c57232.jpg',
              title: 'Smart Assistant',
              desc: 'Contrôle domotique : lumière et portes via mobile app.'
            },
            {
              src: './image/5538282_2867971.jpg',
              title: 'Extract Données',
              desc: 'Liaison Excel/TXT, filtrage et export PDF automatique.'
            },
            {
              src: './image/GestionDonne.png',
              title: 'Gestion Données',
              desc: 'Liaison Excel, manipulation de données, base de données, export automatique en CSV ou Excel.' 
            },
          ].map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/50 transition transform hover:-translate-y-1">
              <img src={project.src} alt={project.title} className="rounded-xl mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold mb-2 text-blue-300">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
  );
}
