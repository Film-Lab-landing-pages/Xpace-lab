import styled from "styled-components";
import { keyframes } from "styled-components";

interface BackgroundProps {
  image: string;
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

export const Background = styled.div<BackgroundProps>`
  background-color: transparent;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100vw;
  height: ${(props) => props.backgroundheight + "px"};
  display: block;
  overflow-x: hidden;
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
  position: relative;
  width: 100vw;
  overflow: hidden;

  .asteroids-img {
    z-index: 100;
    position: absolute;
    left: 0;
    top: 0;
    width: 200vw;

    animation: ${moveAsteroids} 100s linear infinite;
  }
`;
