import React, { useEffect, useRef, useState } from "react";
import { GalaxyContainer, Circle } from "./styles";
import OrbitPlanet from "../OrbitPlanet";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const Galaxy: React.FC = () => {
  const [duration] = useState(100); // ajuste a velocidade aqui
  const planetRefs = [
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
        className="-mt-30"
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
          d="M 700,325
             a 400,150 0 1,0 -800,50
             a 400,150 0 1,0 800,-50"
          fill="none"
          stroke="transparent"
          strokeDasharray="6 6"
          strokeWidth={2}
          opacity={0.3}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 600,
          height: 600,
        }}
      >
        <div ref={planetRefs[0]} style={{ position: "absolute" }}>
          <OrbitPlanet onMouseEnter={handlePause} onMouseLeave={handleResume}>
            nome 1
          </OrbitPlanet>
        </div>
        <div ref={planetRefs[1]} style={{ position: "absolute" }}>
          <OrbitPlanet onMouseEnter={handlePause} onMouseLeave={handleResume}>
            nome 2
          </OrbitPlanet>
        </div>
        <div ref={planetRefs[2]} style={{ position: "absolute" }}>
          <OrbitPlanet onMouseEnter={handlePause} onMouseLeave={handleResume}>
            nome 3
          </OrbitPlanet>
        </div>
      </div>
      <Circle className="-mt-30">
        <span>
          XPACE
          <br />
          LAB
        </span>
      </Circle>
    </GalaxyContainer>
  );
};

export default Galaxy;
