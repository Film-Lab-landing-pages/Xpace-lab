import styled from "styled-components";

export const PlanetContainer = styled.div`
  position: absolute;
  top: -5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
export const CTA = styled.div`
  position: absolute;
  bottom: -64px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
  p {
    font-size: 28px;
    text-align: center;
  }
`;
