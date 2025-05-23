import styled from "styled-components";

export const CTA = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 28px;
    font-weight: 900;
    text-align: center;
  }
  img {
    margin: 8px 0;
  }
`;
