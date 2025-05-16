import styled, { keyframes } from "styled-components";
import { Circle } from "../Galaxy/styles";

interface OrbitCircleProps {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  backgroundColor?: string;
}

export const OrbitCircle = styled(Circle)<OrbitCircleProps>`
  border: 5px solid #fff;
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "transparent"};
  width: 150px;
  height: 150px;
  position: absolute;
  top: ${({ top }) => top || "auto"};
  bottom: ${({ bottom }) => bottom || "auto"};
  left: ${({ left }) => left || "auto"};
  right: ${({ right }) => right || "auto"};
  transition: box-shadow 0.3s;

  &:hover::before {
    opacity: 1;
    pointer-events: auto;
    border-radius: 20px;
    width: 180px;
    height: 200px;
  }

  &::before {
    content: "teste";
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
    background: rgba(0, 0, 0, 0.85);
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    transition: border-radius 0.4s cubic-bezier(0.4, 0, 0.2, 1),
      width 0.4s cubic-bezier(0.4, 0, 0.2, 1),
      height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s;
    z-index: 2;
  }

  &:hover .orbit-before-content {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const OrbitBeforeContent = styled.div`
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
  justify-content: center;
  z-index: 3;
  transition: opacity 0.3s;
  color: #fff;

  h1 {
    font-size: 1.5rem;
    margin: 0 0 0.5rem 0;
  }

  p {
    font-size: 1rem;
    margin: 0;
  }
`;

export const OrbitText = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  color: #fff;
  display: inline-block;
`;
