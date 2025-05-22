"use client";
import React, { JSX } from "react";
import { OrbitBeforeContent, OrbitCircle } from "./styles";

interface PlanetProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  planetColor: string;
  highlightColor?: string;
  hoverContent?: JSX.Element;
  hoverTitle: string;
}

const OrbitPlanet: React.FC<PlanetProps> = ({
  imageSrc,
  planetColor,
  hoverContent,
  hoverTitle,
  highlightColor,
  ...rest
}) => (
  <OrbitCircle className="orbit-planet" $planetColor={planetColor} {...rest}>
    <img src={imageSrc} />
    <OrbitBeforeContent
      $planetColor={planetColor}
      $highlightColor={highlightColor}
      className="orbit-before-content"
    >
      <img src="./images/info-card.png" alt="" />
      <h2>{hoverTitle}</h2>
      <p>{hoverContent}</p>
      <button>VIAJAR</button>
    </OrbitBeforeContent>
  </OrbitCircle>
);

export default OrbitPlanet;
