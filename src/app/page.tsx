"use client";
import About from "@/components/About";
import Main from "@/components/Main";
import { Asteroids, FloatingAstronaut } from "../globalStyles";

export default function Home() {
  return (
    <>
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
    </>
  );
}
