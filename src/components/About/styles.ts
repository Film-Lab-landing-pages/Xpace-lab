import styled from 'styled-components'

interface StarsSectionProps {
  aboutActive: boolean
}

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
    color: #fff;
    display: block;
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
  .display-bottom {
    transform: translateY(-150%) scale(1.05);
    margin-top: 0;
    transition: margin-top 0.5s, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    h2,
    img {
      filter: brightness(1.1);
    }
    .display-bottom {
      transform: translateY(-550%);
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
  }
`

export const Contact = styled.div`
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5; /* Adicionado para garantir que fique acima da lua */

  h2 {
    font-weight: 700;
    font-size: clamp(
      40px,
      4vw,
      60px
    ); /* Adicionado responsividade ao tamanho da fonte */
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
`

interface ToggleButtonProps {
  buttoncolor: string
}

export const ToggleButton = styled.button<ToggleButtonProps>`
  width: 325px;
  border: 1px solid ${({ buttoncolor }) => buttoncolor};
  transform: translateY(200%);

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
  }
`
