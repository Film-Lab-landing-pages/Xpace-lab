"use client";
import React from "react";
import { OrbitCircle, OrbitText } from "./styles";

interface PlanetProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

const OrbitPlanet: React.FC<PlanetProps> = ({
  children,
  top,
  bottom,
  left,
  right,
  ...rest
}) => (
  <OrbitCircle
    className="orbit-planet"
    top={top}
    bottom={bottom}
    left={left}
    right={right}
    {...rest}
  >
    <OrbitText className="orbit-text">{children}</OrbitText>
  </OrbitCircle>
);

export default OrbitPlanet;
