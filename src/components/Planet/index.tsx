"use client";
import React from "react";
import { Circle, Text } from "./styles";

interface PlanetProps {
  children: React.ReactNode;
  size?: "center" | "orbit";
}

const Planet: React.FC<PlanetProps> = ({ children, size }) => (
  <Circle size={size}>
    <Text size={size}>{children}</Text>
  </Circle>
);

export default Planet;
