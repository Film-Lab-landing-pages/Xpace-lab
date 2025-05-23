"use client";

import About from "@/components/About";
import Main from "@/components/Main";
import { FloatingAstronaut, VideoContainer } from "../styles/globalStyles";

import Link from "next/link";
import { colors } from "@/styles/variables";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div
      style={{
        height: "3100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Header />

      <VideoContainer id="main">
        <video
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/xpace-lab-background.mp4" type="video/mp4" />
        </video>
      </VideoContainer>

      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: 1,
          top: 0,
          left: 0,
        }}
      >
        <FloatingAstronaut />
        <Main />
        <About />
        <div id="contact"></div>
      </div>
    </div>
  );
}
