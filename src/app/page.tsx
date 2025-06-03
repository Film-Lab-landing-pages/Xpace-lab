"use client";

import About from "@/components/About";
import Main from "@/components/Main";
import {
  FloatingAstronaut,
  MainContainer,
  Moon,
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
    <MainContainer $scale={scale}>
      <Header />
      <VideoContainer id="main">
        <video autoPlay loop muted playsInline>
          <source src="/videos/xpace-lab-background.mp4" type="video/mp4" />
        </video>
      </VideoContainer>
      <PageContainer style={{ transform: `scale(${scale})` }}>
        <Main />

        <About />
      </PageContainer>
      <FloatingAstronaut />
      <div
        className=" absolute left-0 top-[57%] -translate-y-1/4 -translate-x-1/2 h-[45%] max-h-[510px] object-contain"
        style={{ transform: `scale(${scale})` }}
      >
        <img
          src="images/earth.png"
          alt="Terra"
          className="planet-rotation  h-[100%]  object-contain"
        />
      </div>
      <Moon>
        <img src="images/moon.png" alt="Lua" className="planet-rotation" />
      </Moon>
    </MainContainer>
  );
}
