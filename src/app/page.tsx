"use client";
import About from "@/components/About";
import Main from "@/components/Main";
import { Asteroids, FloatingAstronaut } from "../globalStyles";
import GalaxyBackground from "@/components/Stars";

export default function Home() {
  return (
    <>
      {/* fundo video */}
      {/*  <div style={{ position: "relative", inset: 0, zIndex: 1 }}>
        <video
          style={{ position: "absolute", opacity: 0.5 }}
          autoPlay
          loop
          muted
          playsInline
          className="video-background"
        >
          <source src="/videos/xpace-lab-background.mp4" type="video/mp4" />
        </video>
      </div> */}
      {/* fundo 3d */}

      <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
        <GalaxyBackground />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
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
          <About />
        </Asteroids>
      </div>
    </>
  );
}
