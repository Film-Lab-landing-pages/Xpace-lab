"use client";
import React from "react";

import { Section } from "../../globalStyles";
import { AboutCard, Contact } from "./styles";

const About: React.FC = () => {
  return (
    <Section backgroundheight="60%">
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
        <h2>Sobre Nós</h2>
        <p>
          No centro de uma galáxia criativa, pulsa o{" "}
          <span style={{ fontWeight: "700", color: "#F90094" }}>
            {" "}
            Xpace Lab
          </span>{" "}
          — um universo onde <br /> estúdios, agências, escolas e ideias orbitam
          em perfeita sincronia. Aqui, ,<br /> conectamos a arte ao mercado, a
          inovação ao impacto, e o digital ao humano. <br />
          <span style={{ fontWeight: "700", color: "#FFB800" }}>
            Seja bem-vindo ao espaço onde a criatividade expande fronteiras.{" "}
          </span>
        </p>
        <img
          className="display-bottom"
          src="./images/about2.png"
          alt="Elemento visual da sessão 'Sobre Nós' "
        />
      </AboutCard>
      <Contact>
        <h2>Contato</h2>
        <a>
          <img
            className="whatsapp-btn"
            src="./images/whatsapp-btn.png"
            alt=""
          />
        </a>
        <img
          className="section-break"
          src="./images/section-break.png"
          alt=""
        />
      </Contact>
    </Section>
  );
};

export default About;
