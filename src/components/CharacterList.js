import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchForm from "./SearchForm";

const Nav = styled.nav`
  margin-top: 20px;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <SearchForm />
      <h2>TODO: `array.map()` over your state here!</h2>
      <Nav>
        <Link to="/">Home</Link>
      </Nav>
    </section>
  );
}
