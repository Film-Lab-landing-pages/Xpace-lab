"use client";
import React from "react";

import { Background } from "../../globalStyles";

const About: React.FC = () => {
  return (
    <Background image="images/galaxy.png" className="relative overflow-hidden">
      <img
        src="images/earth.png"
        alt="Earth"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 h-[55%] object-contain"
      />
    </Background>
  );
};

export default About;
