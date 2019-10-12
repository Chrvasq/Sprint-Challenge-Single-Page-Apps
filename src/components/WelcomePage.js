import React from "react";
import styled from "styled-components";

const WelcomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function WelcomePage() {
  return (
    <WelcomeWrapper>
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </WelcomeWrapper>
  );
}
