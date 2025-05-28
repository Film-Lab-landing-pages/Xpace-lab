import styled from "styled-components";
import { colors } from "@/styles/variables";

//Sobre nós

export const AboutCard = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  z-index: 5;

  .pink-span {
    color: ${colors.pink};
  }
  .yellow-span {
    color: ${colors.yellow};
  }

  p,
  img,
  h2 {
    z-index: 10;
  }

  img {
    width: 100%;
    max-width: 530px;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  h2 {
    font-weight: 700;

    transition: color 0.3s, opacity 0.5s;
  }

  p {
    font-size: 22px;
    font-weight: 100;
    color: #fff;
    display: block;
  }

  span {
    font-weight: 700;
  }
  p,
  b,
  span {
    max-width: 730px;
    margin-bottom: 20px;
    text-align: center;
    transition: opacity 0.5s, white-space 0.5s;
    opacity: 1;
    pointer-events: auto;
    white-space: normal;
  }
  button {
    pointer-events: all;
  }
  .display-bottom {
    transform: translateY(-150%) scale(1.05);
    margin-top: 0;
    transition: margin-top 0.5s, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    h2,
    img {
      filter: brightness(1.5);
    }
  }

  &.active {
    .display-bottom {
      transform: translateY(-700%);
      margin-top: 20px;
    }
    p,
    b,
    span {
      opacity: 0;
      pointer-events: none;
      white-space: nowrap;
      color: transparent;
      transition-delay: 0.2s;
    }
    button,
    h2 {
      opacity: 0;
      pointer-events: none;
    }
  }
`;

interface ToggleButtonProps {
  buttoncolor: string;
}

export const OurMissionButton = styled.button<ToggleButtonProps>`
  width: 325px;
  border: 1px solid ${({ buttoncolor }) => buttoncolor};
  transform: translateY(100%);

  h2 {
    padding: 8px 16px;
    font-weight: 900;
    font-size: 24px;
    text-align: center;
    vertical-align: middle;
  }
  &:hover {
    background-color: ${({ buttoncolor }) => buttoncolor};
    color: #000;
    cursor: pointer;
  }
`;

//nossa missão

export const OurMissionCard = styled(AboutCard)`
  top: 45%;
  z-index: 7;
  opacity: 1;
  transition: opacity 1s;
  &.active {
    z-index: 1;
    opacity: 0;
  }
`;

export const AboutButton = styled(OurMissionButton)`
  transform: translateY(-50%);
`;

export const Contact = styled.div`
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;

  h2 {
    font-weight: 700;
    transition: color 0.3s;
  }

  .whatsapp-btn {
    width: 100%;
    max-width: 355px;
    margin-bottom: 32px;
  }
  .section-break {
    max-width: min(90vw, 455px); /* Adicionado limite baseado na viewport */
    width: 100%;
  }
`;
