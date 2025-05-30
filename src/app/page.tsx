"use client";

import About from "@/components/About";
import Main from "@/components/Main";
import {
  FloatingAstronaut,
  MainContainer,
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
          <Main />

          <About />
        </PageContainer>
        <FloatingAstronaut />
      </div>
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
      <img
        src="images/moon.png"
        alt="Lua"
        className="planet-rotation absolute bottom-0 left-1/2 translate-y-[70%] -translate-x-1/2 h-[100vh] min-h-[700px] max-h-[1400px] object-contain"
      />
    </MainContainer>
  );
}
