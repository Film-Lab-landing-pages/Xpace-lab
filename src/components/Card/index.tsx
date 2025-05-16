import React from "react";
import { CardContainer, CardTitle, CardText } from "./styles";

interface CardProps {
  title: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ title, text }) => (
  <CardContainer>
    <CardTitle>{title}</CardTitle>
    <CardText>{text}</CardText>
  </CardContainer>
);

export default Card;
