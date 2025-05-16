"use client";
import About from "@/components/About";
import Main from "@/components/Main";
import { FloatingAstronaut } from "../globalStyles";

export default function Home() {
  return (
    <>
      <FloatingAstronaut />
      <Main />
      <About />
    </>
  );
}
