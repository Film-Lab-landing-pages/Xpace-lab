import styled, { keyframes } from "styled-components";
import { Circle } from "../Galaxy/styles";

interface OrbitCircleProps {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  $planetColor?: string;
}
interface OrbitBeforeContentProps {
  $planetColor?: string;
}

export const OrbitCircle = styled(Circle)<OrbitCircleProps>`
  border: 2px solid ${({ $planetColor }) => $planetColor || "transparent"};
  background-color: rgba(0, 0, 0, 0.5);
  width: 150px;
  height: 150px;
  position: absolute;
  top: ${({ top }) => top || "auto"};
  bottom: ${({ bottom }) => bottom || "auto"};
  left: ${({ left }) => left || "auto"};
  right: ${({ right }) => right || "auto"};
  transition: box-shadow 0.3s;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 16px 2px ${({ $planetColor }) => $planetColor},
      0 0 2px 2px #7ecbff66;

    cursor: pointer;
  }

  &:hover .orbit-before-content {
    opacity: 1;
    top: -25%;
    left: -20%;
    pointer-events: auto;
  }
  &:hover::before {
    border-radius: 0;
    padding: 8px;
    width: 160px;
    height: 220px;
  }
`;

export const OrbitBeforeContent = styled.div<OrbitBeforeContentProps>`
  font-size: 16px;
  padding: 0 8px;
  pointer-events: none;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 180px;
  height: 200px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 10;
  transition: opacity 0.3s, top 0.5s, left 0.5s;
  color: #fff;

  img {
    padding: 0;
    position: absolute;
    top: -10px;
  }

  h2 {
    margin-top: 8px;
    font-weight: 700;
    font-size: 18px;
    text-align: center;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    padding: 0 12px;
    text-align: center;
  }
  button {
    position: absolute;
    bottom: 16px;

    color: #fff;
    font-size: 16px;
    background: rgba(0, 0, 0, 0.35);
    border: 1px solid ${({ $planetColor }) => $planetColor};
    padding: 6px 8px;

    cursor: pointer;
  }
  button:hover {
    font-weight: 700;
    background: ${({ $planetColor }) => $planetColor};
    box-shadow: 0 0 5px 1px ${({ $planetColor }) => $planetColor};
    color: #000;
    filter: brightness(1.25);
  }
`;

export const OrbitText = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  color: #fff;
  display: inline-block;
`;
