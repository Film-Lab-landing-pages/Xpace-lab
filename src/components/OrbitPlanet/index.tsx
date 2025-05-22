"use client";
import React from "react";
import { OrbitBeforeContent, OrbitCircle } from "./styles";

interface PlanetProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  planetColor: string;
  hoverContent?: string;
  hoverTitle: string;
}

const OrbitPlanet: React.FC<PlanetProps> = ({
  top,
  bottom,
  left,
  right,
  imageSrc,
  planetColor,
  hoverContent,
  hoverTitle,
  ...rest
}) => (
  <OrbitCircle
    className="orbit-planet"
    top={top}
    bottom={bottom}
    left={left}
    right={right}
    $planetColor={planetColor}
    {...rest}
  >
    <img src={imageSrc} />
    <OrbitBeforeContent
      $planetColor={planetColor}
      className="orbit-before-content"
    >
      <img src="./images/info-card.png" alt="" />
      <h2>{hoverTitle}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button>VIAJAR</button>
    </OrbitBeforeContent>
  </OrbitCircle>
);

export default OrbitPlanet;
