"use client";
import React from "react";

import { Section } from "../../styles/globalStyles";
import {
  AboutButton,
  AboutCard,
  Contact,
  OurMissionButton,
  OurMissionCard,
} from "./styles";
import { colors } from "@/styles/variables";

const About: React.FC = () => {
  const [ourMissionActive, setOurMissionActive] = React.useState(false);

  return (
    <Section id="about" className="scroll-mt-[500px]" backgroundheight="50%">
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
          buttoncolor={colors.yellow}
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
          buttoncolor={colors.pink}
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
