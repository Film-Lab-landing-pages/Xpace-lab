"use client";
import React from "react";
import Planet from "../Planet";
import { PlanetContainer } from "./styles";
import { Background } from "../../globalStyles";

const Main: React.FC = () => {
  return (
    <Background image="/images/milky-way.png">
      <PlanetContainer>
        <Planet size="center">
          <>
            XPACE
            <br /> LAB
          </>
        </Planet>
      </PlanetContainer>
    </Background>
  );
};

export default Main;
