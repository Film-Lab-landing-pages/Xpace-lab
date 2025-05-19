"use client";
import React from "react";

import { CTA, PlanetContainer } from "./styles";
import { Background } from "../../globalStyles";
import Galaxy from "../Galaxy";

const Main: React.FC = () => {
  return (
    <Background backgroundheight="1041" image="/images/milky-way.png">
      <PlanetContainer>
        <Galaxy />
      </PlanetContainer>
      <CTA>
        <p>
          CTA para <br />
          sobre nós + contato
        </p>
        <img src="./images/arrow.png" alt="" />
        <img src="./images/section-break.png" alt="" />
      </CTA>
    </Background>
  );
};

export default Main;
