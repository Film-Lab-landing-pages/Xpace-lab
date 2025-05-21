import styled from "styled-components";
import { keyframes } from "styled-components";

interface SectionProps {
  backgroundheight?: string;
}
const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`;

export const Section = styled.div<SectionProps>`
  background-color: transparent;
  height: ${(props) => props.backgroundheight};
  display: block;
  overflow: hidden;
  position: relative;

  .planet-rotation {
    animation: ${rotation} 240s infinite linear;
  }
`;

//* Astronaut styles */

const float = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(0);
    }
`;

export const FloatingAstronaut = styled.img.attrs({
  src: "images/astronaut.png",
  alt: "Astronaut",
})`
  position: fixed;
  right: 64px;
  bottom: 32px;
  width: 120px;
  height: auto;
  animation: ${float} 4s ease-in-out infinite;
  z-index: 1000;
  pointer-events: none;
  user-select: none;
`;

const moveAsteroids = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100vw); }
`;

export const Asteroids = styled.div`
  position: absolute;
  top: 50%;
  width: 100vw;
  overflow: hidden;
  z-index: 100;

  .asteroids-img {
    z-index: 100;
    position: absolute;
    left: 0;
    top: 0;
    width: 200vw;

    animation: ${moveAsteroids} 100s linear infinite;
  }
`;
export const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.25);
    pointer-events: none;
    z-index: 1;
  }
`;
