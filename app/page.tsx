"use client";
import React from "react";
import Topnav from "./Component/top-nav/topnav";
import Image from "next/image";
import MailsIcons from "./icon/mail/Mail";
import { FaWhatsapp } from "react-icons/fa"; // Exemple d'icône venant de 'react-icons'
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
import Profil from "./Component/profile/profile";

export default function Home() {
  return (
    <div>
      <Topnav />
 
      <div id="profil" className="profil">
        <Profil/>

        <div className="TextProfil">
          <h1 className="NameTitle">RABENJATOVO Kiady Nekena</h1>
          <h2 className="Poste">Développeur FullStack JavaScript</h2>
          <p className="phrase">
            Développeur passionné et motivé, ravi d'accroître mes compétences en tant que développeur afin d'offrir des solutions innovantes.
          </p>
          <p className="phrase">Actuellement en troisième année à l'ISPM.</p>

          <h2 className="contacte">Contact</h2>
          <div className="lignBtn">
            <ul className="lignBtn1">
              <li>
                <button
                  onClick={() => window.location.href = "mailto:rabenjatovokex@gmail.com?subject=Bonjour&body=Je voudrais discuter"}
                >
                  <MailsIcons /> Mail
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.open('https://wa.me/+2610348570625', '_blank')}
                >
                  <FaWhatsapp /> WhatsApp
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.open('https://github.com/kex23', '_blank')}
                >
                  <GitIcons /> Git
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.open('https://linkedin.com/in/kiady-rabenjatovo-441344305', '_blank')}
                >
                  <LinkdinIcons /> Linkedin
                </button>
              </li>
              <li>
                <button
                  onClick={() => window.open('./PROFIL PERSONNEL cv kex.pdf', '_blank')}
                >
                  <DownloadIcons /> CV
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="competences" className="competences"> {/* Ajout de l'id "projets" */}
        <h2 className="TitreCompetances">Competences :</h2>
        <div className="frontend">
          <h2>Frontend</h2>
          <p className="NomLangage">
            <ReactIcons color="white" width={50} /> React
          </p>
          <p className="NomLangage">
            <HTMLIcons color="white" width={50} /> HTML
          </p>
          <p className="NomLangage">
            <CssIcons color="white" width={50} /> CSS
          </p>
        </div>

        <div className="frontend">
          <h2>Backend</h2>
          <p className="NomLangage">
            <NodeJs color="white" width={50} /> NodeJS
          </p>
          <p className="NomLangage">
            <PythonIcons color="white" width={50} /> Python
          </p>
          <p className="NomLangage">
            <MySqlIcons color="white" width={50} /> MySql
          </p>
        </div>

        <div className="frontend">
          <h2>Autre</h2>
          <p className="NomLangage">
            <GitIcons color="white" width={50} fill="black" stroke="black" /> Git
          </p>
          <p className="NomLangage">
            <TypeScipteIcons color="white" width={50} /> TypeScipte
          </p>
          <p className="NomLangage">
            <FireBaseIcons color="white" width={50} /> FireBase
          </p>
        </div>

        <div className="frontend">
          <h2>Mobile</h2>
          <p className="NomLangage">
            <ReactIcons color="white" width={50} /> React-Native
          </p>
          
        </div>

      </div>

      <div id="projets" className="projet"> {/* Ajout de l'id "projets" */}
        <h2 className="TitreProject">Mes Projets :</h2>
        <div className="firstProject">
          <img src="./image/clinique.png" alt="" />
          <h2>Clinique Management</h2>  
          <p>C'est un logiciel conçu pour faciliter le suivi des stocks de médicaments et permet aussi d'archiver les données des patients.</p>  
        </div>

        <div className="secondProject">
          <img src="./image/shopticket.png" alt="" />
          <h2>Shop Ticket</h2>  
          <p>Une application web qui permet de publier des événements publics comme "concert, spectacle,...", on peut aussi acheter des billets en ligne.</p>  
        </div>

        <div className="secondProject">
          <div className="ImageKozy">
            <img src="./image/Mikozy.jpg" alt="" width={150} height={200} />
            <h2>Mikozy</h2>  
            <p>Application mobile qui permet d'envoyer des messages et images avec les proches.</p>  
          </div>
        </div>

        <div className="secondProject">
          <img src="./image/beer-Pong.jpg" alt="" />
          <h2>Beer-Pong</h2>  
          <p>Un jeu sur la plateforme Windows. Dans ce jeu, on lance des balles de ping-pong dans des gobelets qui contiennent de la bière et à force d'entrer les balles dans les gobelets, on doit boire et se saouler.</p>  
        </div>

        <div className="secondProject">
          <div className="ImageKozy">
            <img src="./image/d5c797ea-5541-47d5-9e97-4d7497c57232.jpg" alt="" width={150} height={200} />
            <h2>Smart Assistant</h2>  
            <p>Un application mobile qui permet de controler une maison comme : allumer/eteindre la lumier ,ouvrire/fermer la porte a l aide d un simple clique du boutton sur l application</p>  
          </div>
        </div>
      </div>
    </div>
  );
}

