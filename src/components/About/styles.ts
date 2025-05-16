import styled from "styled-components";

//* Card styles */

export const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 24px;
  max-width: 350px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;

  h2 {
    margin: 0 0 12px 0;
    text-align: center;
  }
  p {
    margin: 0;
    text-align: center;
  }
`;
