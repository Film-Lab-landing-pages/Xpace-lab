import styled from "styled-components";

interface BackgroundProps {
  image: string;
}
export const Background = styled.div<BackgroundProps>`
  background-image: url(${(props) => props.image});
  background-size: 100% auto;
  background-position: top center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: block;
  overflow-x: hidden;
`;
