"use client";
import React from "react";

import { PlanetContainer } from "./styles";
import { Background } from "../../globalStyles";
import Galaxy from "../Galaxy";

const Main: React.FC = () => {
  return (
    <Background image="/images/milky-way.png">
      <PlanetContainer>
        <Galaxy />
      </PlanetContainer>
    </Background>
  );
};

export default Main;
