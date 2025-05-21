"use client";
import React from "react";

import { Background } from "../../globalStyles";
import { AboutCard, Contact } from "./styles";

const About: React.FC = () => {
  return (
    <Background
      backgroundheight="1440"
      image="images/galaxy.png"
      className="relative overflow-hidden"
    >
      <img
        src="images/earth.png"
        alt="Terra"
        className="planet-rotation absolute left-0 top-1/3 -translate-y-1/4 -translate-x-1/2 h-[45%] max-h-[510px] object-contain"
      />
      <img
        src="images/moon.png"
        alt="Lua"
        className="planet-rotation absolute bottom-0 left-1/2 translate-y-3/4 -translate-x-1/2 h-[80%] max-h-[1280px] object-contain"
      />
      <AboutCard>
        <img
          className="display-top"
          src="./images/about-top.png"
          alt="Elemento visual da sessão 'Sobre Nós' "
        />
        <h2>SOBRE NÓS</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.{" "}
        </p>
        <img
          className="display-bottom"
          src="./images/about2.png"
          alt="Elemento visual da sessão 'Sobre Nós' "
        />
      </AboutCard>
      <Contact>
        <h2>CONTATO</h2>
        <button> Fale com a Nanda</button>
        <img src="./images/section-break.png" alt="" />
      </Contact>
    </Background>
  );
};

export default About;
