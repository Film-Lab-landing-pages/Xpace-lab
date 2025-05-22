import React, { useEffect, useRef, useState } from "react";
import { GalaxyContainer, Circle, Orbit } from "./styles";
import OrbitPlanet from "../OrbitPlanet";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

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
  const pink = "#F90094";
  const blue = "#0023B5";
  const yellow = "#F9B807";
  const red = "#931E26";

  const highlights = {
    red: "#DA4953",
    blue: "#5273FF",
  };

  const NCAContent = (
    <>
      O <b>Núcleo de Capacitação Artística </b> é a escola de teatro
      {/*  <br /> */}
      que inspira corações e forma artistas. Do palco ao cotidiano,
      {/*  <br /> */}é um espaço para viver, sentir e expressar a arte como
      {/*  <br /> */}
      linguagem universal
    </>
  );
  const facilContent = (
    <>
      A <b>FACIL</b> é nossa academia de habilidades essenciais para{" "}
      {/* <br /> */}
      uma nova era. Criatividade, comunicação, influência e {/* <br /> */}
      liderança ganham espaço em cursos que iluminam mentes e {/* <br /> */}
      despertam vozes. Aqui, talentos brilham ainda mais.
    </>
  );
  const foraDaCaixaContent = (
    <>
      Nossa <b> editora cósmica </b>é um convite para pensar diferente.
      {/* <br /> */}
      Com livros e projetos que tocam temas como diversidade,
      {/* <br /> */}
      sustentabilidade e empatia, o Lab Fora da Caixa é a centelha
      {/* <br /> */}
      que acende novas realidades através da cultura.
    </>
  );
  const digi4AllContent = (
    <>
      A <b>Filmelab Digi4All</b> é a agência digital que acelera
      {/* <br /> */}
      marcas rumo ao futuro. Com criatividade estratégica,
      {/* <br /> */}
      lançamos campanhas, gerenciamos redes e {/* <br /> */}
      impulsionamos negócios em direção ao crescimento.
      {/* <br /> */}
      Tudo isso com alma, dados e um toque de magia digital.
    </>
  );
  const filmLabContent = (
    <>
      Na constelação da Xpace, a <b>Filmelab</b> é a supernova da
      {/* <br /> */}
      produção audiovisual. Com estúdios completos, direção
      {/* <br /> */}
      criativa e soluções de ponta, transformamos ideias em vídeos{" "}
      {/* <br /> */}
      de impacto, transmitindo mensagens que brilham no mercado.
    </>
  );

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
  const handleMouseOver = () => {
    setPlanetZIndex(200);
  };
  const handleMouseOut = () => {
    setPlanetZIndex(0);
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
            planetColor={red}
            highlightColor={highlights.red}
            hoverTitle="NCA"
            hoverContent={NCAContent}
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
            planetColor={yellow}
            hoverTitle="Facil"
            hoverContent={foraDaCaixaContent}
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
            planetColor={pink}
            hoverTitle="Digi4All"
            hoverContent={digi4AllContent}
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
            planetColor={blue}
            highlightColor={highlights.blue}
            hoverTitle="Film Lab"
            hoverContent={filmLabContent}
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
            planetColor={yellow}
            hoverTitle="Facil"
            hoverContent={facilContent}
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
