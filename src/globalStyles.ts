import styled from "styled-components";
import { keyframes } from "styled-components";

interface BackgroundProps {
  image: string;
}
export const Background = styled.div<BackgroundProps>`
  background-image: url(${(props) => props.image});
  background-size: cover; // alterado aqui
  background-position: center center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: block;
  overflow-x: hidden;
  position: relative;
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
