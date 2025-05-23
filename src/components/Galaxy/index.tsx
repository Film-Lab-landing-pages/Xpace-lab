import React, { useEffect, useRef, useState } from "react";
import { GalaxyContainer, Circle, Orbit } from "./styles";
import OrbitPlanet from "../OrbitPlanet";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { colors, highlights } from "@/styles/variables";
import content from "./content";

gsap.registerPlugin(MotionPathPlugin);

const Galaxy: React.FC = () => {
  const [duration] = useState(100);
  const [planetZIndex, setPlanetZIndex] = useState(3);
  const planetRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const animationRefs = useRef<gsap.core.Tween[]>([]);

  useEffect(() => {
    // Mata animações antigas antes de criar novas
    animationRefs.current.forEach((anim) => anim && anim.kill());
    animationRefs.current = [];

    planetRefs.forEach((ref, i) => {
      if (ref.current) {
        const tween = gsap.to(ref.current, {
          motionPath: {
            path: "#orbit-path",
            align: "#orbit-path",
            alignOrigin: [0.5, 0.5],
            start: i / planetRefs.length,
            end: i / planetRefs.length + 1,
            autoRotate: false,
          },
          repeat: -1,
          duration: duration,
          ease: "linear",
        });
        animationRefs.current.push(tween);
      }
    });
  }, [duration, planetRefs]);

  // Pausa e retoma todas as animações
  const handlePause = () => {
    animationRefs.current.forEach((anim) => anim && anim.pause());
  };
  const handleResume = () => {
    animationRefs.current.forEach((anim) => anim && anim.resume());
  };

  return (
    <GalaxyContainer>
      <svg
        width={1200}
        height={600}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <path
          id="orbit-path"
          d="M 800,325
             a 500,175 0 1,0 -1000,70
             a 500,175 0 1,0 1000,-70"
          fill="none"
          stroke="transparent"
          strokeDasharray="6 6"
          strokeWidth={2}
          opacity={0.3}
        />
      </svg>
      <Orbit>
        <div
          className="orbit-div"
          ref={planetRefs[0]}
          style={{ position: "absolute" }}
        >
          <OrbitPlanet
            imageSrc="./logo-nca.png"
            planetColor={colors.red}
            highlightColor={highlights.red}
            hoverTitle="NCA-SP"
            hoverContent={content.NCA}
            onMouseEnter={handlePause}
            onMouseLeave={handleResume}
          ></OrbitPlanet>
        </div>
        <div
          className="orbit-div"
          ref={planetRefs[1]}
          style={{ position: "absolute" }}
        >
          <OrbitPlanet
            imageSrc="./logo-fora-da-caixa.png"
            planetColor={colors.yellow}
            hoverTitle="FORA DA CAIXA"
            hoverContent={content.ForaDaCaixa}
            onMouseEnter={handlePause}
            onMouseLeave={handleResume}
          ></OrbitPlanet>
        </div>
        <div
          className="orbit-div"
          ref={planetRefs[2]}
          style={{ position: "absolute" }}
        >
          <OrbitPlanet
            imageSrc="./logo-digi4all.png"
            planetColor={colors.pink}
            hoverTitle="DIGI4ALL"
            hoverContent={content.Digi4All}
            onMouseEnter={handlePause}
            onMouseLeave={handleResume}
          ></OrbitPlanet>
        </div>
        <div
          className="orbit-div"
          ref={planetRefs[3]}
          style={{ position: "absolute" }}
        >
          <OrbitPlanet
            imageSrc="./logo-film-lab.png"
            planetColor={colors.blue}
            highlightColor={highlights.blue}
            hoverTitle="FILM LAB"
            hoverContent={content.FilmLab}
            onMouseEnter={handlePause}
            onMouseLeave={handleResume}
          ></OrbitPlanet>
        </div>
        <div
          className="orbit-div"
          ref={planetRefs[4]}
          style={{ position: "absolute" }}
        >
          <OrbitPlanet
            imageSrc="./logo-facil.png"
            planetColor={colors.yellow}
            hoverTitle="FACIL"
            hoverContent={content.FACIL}
            onMouseEnter={handlePause}
            onMouseLeave={handleResume}
          ></OrbitPlanet>
        </div>

        <Circle>
          <img
            src="logo-xpace-lab.png"
            alt="Logo xpace lab"
            className="p-2.5"
          />
        </Circle>
      </Orbit>
    </GalaxyContainer>
  );
};

export default Galaxy;
