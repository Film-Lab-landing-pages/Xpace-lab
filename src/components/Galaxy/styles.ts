import styled from "styled-components";

export const GalaxyContainer = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
  margin: 0 auto;
`;

export const Circle = styled.div`
  width: 13.75em; /* 220px / 16 = 13.75em */
  height: 13.75em;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  span {
    color: #000;
    font-size: 2rem;
    font-weight: 400;
  }
`;
