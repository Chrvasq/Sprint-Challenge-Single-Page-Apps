import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavContainer = styled.nav`
  width: 30%;
  display: flex;
  justify-content: space-evenly;
`;
export default function Nav() {
  return (
    <NavContainer>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/characters">Characters</NavLink>
    </NavContainer>
  );
}
