"use client";
import React from "react";

import { CTA } from "./styles";
import { Section } from "../../styles/globalStyles";
import Galaxy from "../Galaxy";

const Main: React.FC = () => {
  return (
    <Section backgroundheight="50%">
      <Galaxy />
      <CTA>
        <h2>Explore nossas estrelas</h2>
        <img src="./images/arrow.png" alt="" />
        <img src="./images/section-break.png" alt="" />
      </CTA>
    </Section>
  );
};

export default Main;
