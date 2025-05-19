import styled, { keyframes } from "styled-components";
import { Circle } from "../Galaxy/styles";

interface OrbitCircleProps {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  $planetColor?: string;
}

export const OrbitCircle = styled(Circle)<OrbitCircleProps>`
  border: 5px solid #fff;
  background-color: ${({ $planetColor }) => $planetColor || "transparent"};
  width: 150px;
  height: 150px;
  position: absolute;
  top: ${({ top }) => top || "auto"};
  bottom: ${({ bottom }) => bottom || "auto"};
  left: ${({ left }) => left || "auto"};
  right: ${({ right }) => right || "auto"};
  transition: box-shadow 0.3s;

  &::before {
    content: "";
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150px;
    height: 150px;
    background: #14131380;
    opacity: 0.8;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    transition: border-radius 0.4s cubic-bezier(0.4, 0, 0.2, 1),
      width 0.4s cubic-bezier(0.4, 0, 0.2, 1),
      height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s, top 0.5s,
      left 0.5s;
    z-index: 2;
  }
  &:hover {
    cursor: pointer;
  }
  &:hover .orbit-before-content,
  &:hover::before {
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

export const OrbitBeforeContent = styled.div`
  pointer-events: none;
  opacity: 0;
  position: absolute;
  padding: 12px;
  top: 50%;
  left: 50%;
  width: 180px;
  height: 200px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: opacity 0.3s, top 0.5s, left 0.5s;
  color: #fff;
  font-family: "Inter", sans-serif;
  img {
    position: absolute;
  }

  h2 {
    font-weight: 700;
    font-size: 18px;
    text-align: center;
  }

  p {
    font-weight: 400;
    font-size: 14px;

    text-align: center;
  }
`;

export const OrbitText = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  color: #fff;
  display: inline-block;
`;

export const Orbit = styled.div`
  position: "absolute";
  top: 0;
  left: 0;
  width: 600;
  height: 600;
  z-index: 5;
`;
