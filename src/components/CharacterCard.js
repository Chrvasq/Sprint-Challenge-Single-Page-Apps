import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid black;
  background: lightblue;
`;

const Img = styled.img`
  max-width: 60%;
`;

const Span = styled.span`
  font-weight: bold;
`;

export default function CharacterCard(props) {
  return (
    <Card>
      <h2>{props.name}</h2>
      <Img src={props.image} alt={props.name} />
      <div>
        <p>
          <Span>Gender:</Span> {props.gender}
        </p>
        <p>
          <Span>Origin:</Span> {props.origin}
        </p>
        <p>
          <Span>Species:</Span> {props.species}
        </p>
        <p>
          <Span>Status:</Span> {props.status}
        </p>
      </div>
    </Card>
  );
}
