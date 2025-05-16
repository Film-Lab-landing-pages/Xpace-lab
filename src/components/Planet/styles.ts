import styled from "styled-components";

type PlanetSize = "center" | "orbit";

interface SizeProps {
  size?: PlanetSize;
}

export const Circle = styled.div<SizeProps>`
  width: ${({ size }) => (size === "center" ? "220px" : "170px")};
  height: ${({ size }) => (size === "center" ? "220px" : "170px")};
  border-radius: 50%;
  background: #4a90e2;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Text = styled.span<SizeProps>`
  color: #fff;
  font-size: ${({ size }) => (size === "center" ? "2rem" : "1.2rem")};
  font-weight: 400;
`;
