import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WelcomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Nav = styled.nav`
  margin-top: 20px;
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
      <Nav>
        <Link to="/characters">Characters</Link>
      </Nav>
    </WelcomeWrapper>
  );
}
