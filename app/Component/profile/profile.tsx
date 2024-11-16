import React from "react";
import Image from "next/image";
import { FaLightbulb, FaComments, FaChartLine } from "react-icons/fa";
import './profile.css';

export default function Profil() {
  return (
    <div className="profil">
      <div className="circle hidden sm:flex"> {/* Masque sur mobile, affiche à partir de sm (640px) */}
        <Image 
          src="/image/Kex.JPEG" 
          alt="Kex Image"
          width={200}
          height={200}
          className="KexImage"
          
        />
        <div className="icon icon1"><FaLightbulb /></div>
        <div className="icon icon2"><FaComments /></div>
        <div className="icon icon3"><FaChartLine /></div>
      </div>
    </div>
  );
}
