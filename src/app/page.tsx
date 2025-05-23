"use client";

import About from "@/components/About";
import Main from "@/components/Main";
import {
  Asteroids,
  FloatingAstronaut,
  VideoContainer,
  Header,
  NavItem,
} from "../styles/globalStyles";
import GalaxyBackground from "@/components/Stars";
import Link from "next/link";
import { colors } from "@/styles/variables";

export default function Home() {
  return (
    <div
      style={{
        height: "3100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Header>
        <div className="logo-container ">
          <img src="./logo-xpace-lab-imagem.png" alt="logo xpace lab" />
        </div>
        <nav>
          <NavItem hovercolor={colors.pink}>
            <Link href="#main">Universo</Link>
          </NavItem>
          <NavItem hovercolor={colors.yellow}>
            <Link href="#about"> Estrelas</Link>
          </NavItem>

          <NavItem hovercolor={colors.blue}>
            <Link href="#contact">Contato </Link>
          </NavItem>
        </nav>
        <img className="menu-border" src="/images/menu-border.png" alt="" />
      </Header>
      {/* fundo video */}
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
      {/* fundo 3d */}
      {/*  <div style={{ position: "fixed", inset: 0, zIndex: 0, opacity: 0.5 }}>
        <GalaxyBackground />
      </div> */}
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
        <Asteroids>
          <img
            className="asteroids-img"
            src="./images/asteroids.png"
            alt="Asteróides"
          />
          <img
            className="asteroids-img"
            src="./images/asteroids.png"
            alt="Asteróides"
            style={{ left: "100vw" }}
          />
        </Asteroids>
        <About />
        <div id="contact"></div>
      </div>
    </div>
  );
}
