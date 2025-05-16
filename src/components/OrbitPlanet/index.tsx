"use client";
import React from "react";
import { OrbitBeforeContent, OrbitCircle, OrbitText } from "./styles";

interface PlanetProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  backgroundColor?: string;
}

const OrbitBeforeContentTest = () => (
  <OrbitBeforeContent className="orbit-before-content">
    <h1>Conteúdo Teste</h1>
    <p>Este é um parágrafo de teste.</p>
  </OrbitBeforeContent>
);

const OrbitPlanet: React.FC<PlanetProps> = ({
  top,
  bottom,
  left,
  right,
  imageSrc,
  backgroundColor,
  ...rest
}) => (
  <OrbitCircle
    className="orbit-planet"
    top={top}
    bottom={bottom}
    left={left}
    right={right}
    backgroundColor={backgroundColor}
    {...rest}
  >
    <img src={imageSrc} />
  </OrbitCircle>
);

export default OrbitPlanet;
