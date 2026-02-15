"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
// import Link from "next/link"; // Not used currently

const Footer = () => {
  const [showContactOptions, setShowContactOptions] = useState(false);

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Pronto para elevar <span className="text-purple">sua</span> presença digital
          para o próximo nível?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Entre em contato comigo hoje e vamos discutir como posso ajudar você a alcançar seus objetivos.
        </p>
        
        {!showContactOptions ? (
          <MagicButton
            title="Vamos conversar"
            icon={<FaLocationArrow />}
            position="right"
            handleClick={() => setShowContactOptions(true)}
          />
        ) : (
          <div className="flex flex-col md:flex-row gap-4 mt-4">
             <a href="mailto:michaelhenriquepedro@gmail.com">
              <MagicButton
                title="Enviar Email"
                icon={<FaEnvelope />}
                position="right"
                otherClasses="!bg-[#161a31]"
              />
            </a>
            <a 
              href="https://wa.me/5513996536924?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20seus%20projetos."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MagicButton
                title="WhatsApp"
                icon={<FaWhatsapp />}
                position="right"
                otherClasses="!bg-[#161a31]"
              />
            </a>
          </div>
        )}
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light lg:mb-[-2rem] sm:mb-2">
          Copyright © 2024 Michael Silva
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 mt-4 lg:mb-8"
            >
              <a href={info.link}>
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
