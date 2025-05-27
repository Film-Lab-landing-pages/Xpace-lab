import React, { useEffect, useRef, useState } from "react";
import { GalaxyContainer, Circle, Orbit } from "./styles";
import OrbitPlanet from "../OrbitPlanet";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { planets } from "../utils/planetsContent";

gsap.registerPlugin(MotionPathPlugin);

const Galaxy: React.FC = () => {
  const [duration] = useState(100);
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
    window.dispatchEvent(new Event("orbitPlanetsUpdate"));
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
        {planets.map((planet, index) => (
          <div className="orbit-div" ref={planetRefs[planet.order]}>
            <OrbitPlanet
              key={planet.hoverTitle}
              hoverTitle={planet.hoverTitle}
              imageSrc={planet.imageSrc}
              hoverContent={planet.hoverContent}
              planetColor={planet.planetColor}
              onMouseEnter={handlePause}
              onMouseLeave={handleResume}
            />
          </div>
        ))}

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
