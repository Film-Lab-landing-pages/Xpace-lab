import styled from "styled-components";

export const AboutCard = styled.div`
  margin: auto;
  margin-top: 25%;
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
    transform: translateY(-60px);
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
  bottom: 50vh;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-weight: 700;
    font-size: 55px;
    transition: color 0.3s;
    margin-bottom: 16px;
  }
  button {
    color: #fff;
    font-size: 32px;
    background: rgba(217, 217, 217, 0.5);
    border: 1px solid #fff;
    padding: 10px 8px;
    margin-bottom: 32px;
    cursor: pointer;
  }
`;
