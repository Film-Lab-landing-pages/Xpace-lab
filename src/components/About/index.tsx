"use client";
import React from "react";

import { Section } from "../../globalStyles";
import {
  AboutButton,
  AboutCard,
  Contact,
  OurMissionButton,
  OurMissionCard,
} from "./styles";

const About: React.FC = () => {
  const [ourMissionActive, setOurMissionActive] = React.useState(false);

  const pink = "#F90096";
  const yellow = "#F9B807";
  const blue = "#5273FF";
  return (
    <Section backgroundheight="60%">
      <img
        id="about"
        src="images/earth.png"
        alt="Terra"
        className="planet-rotation  scroll-mt-[500px] absolute left-0 top-1/3 -translate-y-1/4 -translate-x-1/2 h-[45%] max-h-[510px] object-contain"
      />
      <img
        src="images/moon.png"
        alt="Lua"
        className="planet-rotation absolute bottom-0 left-1/2 translate-y-[70%] -translate-x-1/2 h-[100vh] min-h-[700px] max-h-[1400px] object-contain"
      />
      <AboutCard className={ourMissionActive ? "active" : ""}>
        <img
          className="display-top"
          src="./images/about-top.png"
          alt="Elemento visual da sessão 'Sobre Nós' "
        />
        <h2>Sobre Nós</h2>
        <p>
          No centro de uma galáxia criativa, pulsa o
          <span className="pink-span"> Xpace Lab</span>
          — um universo onde <br /> estúdios, agências, escolas e ideias orbitam
          em perfeita sincronia. Aqui, ,<br /> conectamos a arte ao mercado, a
          inovação ao impacto, e o digital ao humano. <br />
          <span className="yellow-span">
            Seja bem-vindo ao espaço onde a criatividade expande fronteiras.
          </span>
        </p>
        <OurMissionButton
          buttoncolor={yellow}
          onClick={() => setOurMissionActive(true)}
        >
          <h2>NOSSO PROPÓSITO</h2>
        </OurMissionButton>
        <img
          className="display-bottom"
          src="./images/about2.png"
          alt="Elemento visual da sessão 'Sobre Nós' "
        />
      </AboutCard>
      <OurMissionCard className={!ourMissionActive ? "active" : ""}>
        <AboutButton
          buttoncolor={pink}
          onClick={() => setOurMissionActive(false)}
        >
          <h2>SOBRE NÓS</h2>
        </AboutButton>
        <h2>Nosso Propósito</h2>
        <p>
          Acreditamos em criar pontes entre o mercado e a cultura, entre o que é
          técnico e o que é sensível, entre o que comunica e o que transforma.
        </p>
      </OurMissionCard>

      <Contact className="scroll-mt-[1200px]">
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
