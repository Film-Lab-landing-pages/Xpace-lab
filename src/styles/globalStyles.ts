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
  overflow: visible;
  position: relative;
  width: 100vw;

  .planet-rotation {
    animation: ${rotation} 240s infinite linear;
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
    background-color: rgba(0, 0, 0, 0.36);
    pointer-events: none;
    z-index: 1;
  }
  video {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    top: 0;
    width: 100vw;
    min-width: 1344px;
    object-fit: cover;
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
  src: "images/astronaut-2.png",
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

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  transform-origin: top center;
  top: 0;
  left: 0;
`;
