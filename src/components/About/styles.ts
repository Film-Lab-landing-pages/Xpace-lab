import styled from "styled-components";

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
    font-size: 55px;
    transition: color 0.3s;
  }

  p {
    font-size: 22px;
    font-weight: 100;
    max-width: 730px;
    margin-bottom: 20px;
    text-align: center;
    opacity: 0;
    pointer-events: none;
    display: block;
    white-space: nowrap;
    transition: opacity 0.5s, white-space 0.5s;
    color: transparent;
  }
  .display-bottom {
    margin-top: 20px;
    transform: translateY(-400%);
    transition: margin-top 0.5s, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover h2,
  &:hover img {
    filter: brightness(1.1);
  }

  // Anima a segunda imagem para baixo ao hover
  &:hover .display-bottom {
    transform: translateY(0) scale(1.05);
    margin-top: 0;
  }

  // Faz o p aparecer com fade in ao hover
  &:hover p {
    opacity: 1;
    pointer-events: auto;
    transition-delay: 0.2s;
    white-space: normal;
    color: #fff;
  }
`;

export const Contact = styled.div`
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-weight: 700;
    font-size: 60px;
    transition: color 0.3s;
  }

  .whatsapp-btn {
    width: 100%;
    max-width: 355px;
    margin-bottom: 32px;
  }
  .section-break {
    max-width: 455px;
  }
`;
