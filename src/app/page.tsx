"use client";

import About from "@/components/About";
import Main from "@/components/Main";
import {
  FloatingAstronaut,
  PageContainer,
  VideoContainer,
} from "../styles/globalStyles";

import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { useStore } from "@/store/store";

export default function Home() {
  const scale = useStore((state) => state.scale);
  useEffect(() => {
    function handleResize() {
      const screenwidth = window.innerWidth;
      const width = 1920;
      const proportion = Math.max(screenwidth / width, 0.7);

      useStore.getState().setScale(proportion);
    }

    handleResize(); // chama ao montar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      style={{
        marginTop: "-7.5%",
        position: "absolute",
        top: 0,
        left: 0,
        height: `${3000 * scale}px`,
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          height: "3100px", // fixed height, not scaled
        }}
      >
        <Header />

        <VideoContainer id="main">
          <video autoPlay loop muted playsInline>
            <source src="/videos/xpace-lab-background.mp4" type="video/mp4" />
          </video>
        </VideoContainer>
        <PageContainer style={{ transform: `scale(${scale})` }}>
          <FloatingAstronaut />
          <Main />

          <About />
        </PageContainer>
      </div>
    </div>
  );
}
