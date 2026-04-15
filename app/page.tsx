"use client";

import React, { useEffect, useState } from "react";
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
  const [active, setActive] = useState("profil");

  useEffect(() => {
    const sections = ["profil", "competences", "projets"];

    const onScroll = () => {
      let current = "profil";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 200) current = id;
      });

      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#050712] text-white min-h-screen">

      {/* NAV CLEAN */}
      <div className="fixed top-0 w-full flex justify-center z-50">
        <div className="mt-4 flex gap-2 rounded-2xl bg-white/5 backdrop-blur border border-white/10 px-3 py-2">
          {["profil", "competences", "projets"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`px-5 py-2 rounded-xl text-sm transition ${
                active === item
                  ? "bg-cyan-500 text-black"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* HERO ULTRA CLEAN */}
      <section
        id="profil"
        className="min-h-screen flex items-center px-6 pt-28"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div>
            <p className="text-cyan-400 text-sm mb-4">
                RABENJATOVO Kiady Nekena
            </p>

            <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
              Full-Stack 
              <span className="block text-cyan-400">
                JavaScript
              </span>
            </h1>

            <p className="text-white/60 mt-6 leading-relaxed">
              Développeur passionné spécialisé en React, Next.js, Node.js et
              Python. J’aime créer des interfaces propres et modernes.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-3 mt-8">
              <button
                onClick={() =>
                  (window.location.href =
                    "mailto:rabenjatovokex@gmail.com?subject=Bonjour&body=Je voudrais discuter")
                }
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition"
              >
                <MailsIcons /> Mail
              </button>

              <button
                onClick={() =>
                  window.open("https://wa.me/261389029847", "_blank")
                }
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20"
              >
                <FaWhatsapp /> WhatsApp
              </button>

              <button
                onClick={() => window.open("https://github.com/kex23", "_blank")}
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20"
              >
                <GitIcons /> GitHub
              </button>

              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/kiady-nekena-rabenjatovo-441344305/",
                    "_blank"
                  )
                }
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20"
              >
                <LinkdinIcons /> LinkedIn
              </button>

              <button
                onClick={() =>
                  window.open("./PROFIL PERSONNEL cv kex.pdf", "_blank")
                }
                className="px-5 py-3 rounded-xl bg-yellow-400 text-black"
              >
                <DownloadIcons /> CV
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full" />
              <Image
                src="/image/Kex.JPEG"
                alt="profile"
                width={380}
                height={380}
                className="rounded-full border border-white/10 relative"
              />
            </div>
          </div>
        </div>
      </section>

      {/* COMPETENCES CLEAN */}
      <section id="competences" className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Compétences
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Frontend",
                items: [
                  { icon: <ReactIcons width={28} />, name: "React" },
                  { icon: <HTMLIcons width={28} />, name: "HTML" },
                  { icon: <CssIcons width={28} />, name: "CSS" },
                ],
              },
              {
                title: "Backend",
                items: [
                  { icon: <NodeJs width={28} />, name: "NodeJS" },
                  { icon: <PythonIcons width={28} />, name: "Python" },
                  { icon: <MySqlIcons width={28} />, name: "MySQL" },
                  { icon: <JavaIcons width={28} />, name: "Java" },
                ],
              },
              {
                title: "Tools",
                items: [
                  { icon: <TypeScipteIcons width={28} />, name: "TypeScript" },
                  { icon: <FireBaseIcons width={28} />, name: "Firebase" },
                ],
              },
            ].map((box, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-cyan-400 mb-6">{box.title}</h3>

                <div className="space-y-4 text-white/70">
                  {box.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-3">
                      {item.icon}
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS CLEAN GRID */}
      <section id="projets" className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Projets
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                src: "/image/clinique.png",
                title: "Clinique Management",
                desc: "Gestion médicale",
              },
              {
                src: "/image/shopticket.png",
                title: "Shop Ticket",
                desc: "Billetterie",
              },
              {
                src: "/image/Mikozy.jpg",
                title: "Mikozy",
                desc: "Chat app",
              },
              {
                src: "/image/beer-Pong.jpg",
                title: "Beer Pong",
                desc: "Game Windows",
              },
              {
                src: "/image/d5c797ea-5541-47d5-9e97-4d7497c57232.jpg",
                title: "Smart Assistant",
                desc: "Domotique",
              },
              {
                src: "/image/5538282_2867971.jpg",
                title: "Extract Data",
                desc: "Automation",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/40 transition"
              >
                <img
                  src={p.src}
                  className="h-48 w-full object-cover group-hover:scale-105 transition"
                />

                <div className="p-4">
                  <h3 className="text-cyan-400">{p.title}</h3>
                  <p className="text-white/50 text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}