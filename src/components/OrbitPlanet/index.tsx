"use client";
import React, { JSX, useRef } from "react";
import { OrbitBeforeContent, OrbitCircle } from "./styles";

interface PlanetProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string;
  planetColor: string;
  highlightColor?: string;
  hoverContent?: JSX.Element;
  hoverTitle: string;
}

const OrbitPlanet: React.FC<PlanetProps> = ({
  imageSrc,
  planetColor,
  hoverContent,
  hoverTitle,
  highlightColor,
  ...rest
}) => {
  const planet = useRef<HTMLDivElement>(null);
  const [tooltipTranslate, setTooltipTranslate] = React.useState({
    x: "0%",
    y: "0%",
  });
  function getTranslateX(element: HTMLElement): string {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const screenW = window.innerWidth;
    const normX = (centerX / screenW) * 2 - 1;
    return `${-(50 * normX)}%`;
  }

  function getTranslateY(element: HTMLElement): string {
    const rect = element.getBoundingClientRect();
    const centerY = rect.top + rect.height / 2;
    const screenH = window.innerHeight;
    const normY = (centerY / screenH) * 2 - 1;
    return `${-(50 * normY)}%`;
  }
  React.useEffect(() => {
    function updateTooltip() {
      if (planet.current) {
        setTooltipTranslate({
          x: getTranslateX(planet.current),
          y: getTranslateY(planet.current),
        });
      }
    }

    window.addEventListener("orbitPlanetsUpdate", updateTooltip);

    // Atualiza inicialmente
    updateTooltip();

    return () => {
      window.removeEventListener("orbitPlanetsUpdate", updateTooltip);
    };
  }, []);
  return (
    <OrbitCircle
      ref={planet}
      className="orbit-planet"
      $planetColor={planetColor}
      $tooltipTranslateX={tooltipTranslate.x}
      $tooltipTranslateY={tooltipTranslate.y}
      {...rest}
    >
      {/*  <div>{tooltipTranslate.x}</div> */}
      <img src={imageSrc} />
      <OrbitBeforeContent
        $planetColor={planetColor}
        $highlightColor={highlightColor}
        className="orbit-before-content"
      >
        <img src="./images/info-card.png" alt="" />
        <h2>{hoverTitle}</h2>
        <p>{hoverContent}</p>
        <button>VIAJAR</button>
      </OrbitBeforeContent>
    </OrbitCircle>
  );
};

export default OrbitPlanet;
