import styled, { keyframes } from "styled-components";
import { Circle } from "../Galaxy/styles";

interface OrbitCircleProps {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export const OrbitCircle = styled(Circle)<OrbitCircleProps>`
  border: 5px solid #fff;
  background-color: transparent;
  width: 150px;
  height: 150px;
  position: absolute;
  top: ${({ top }) => top || "auto"};
  bottom: ${({ bottom }) => bottom || "auto"};
  left: ${({ left }) => left || "auto"};
  right: ${({ right }) => right || "auto"};
`;

export const OrbitText = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  color: #fff;
  display: inline-block;
`;
