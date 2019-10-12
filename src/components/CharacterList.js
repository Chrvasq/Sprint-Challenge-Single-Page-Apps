import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchForm from "./SearchForm";
import CharacterCard from "./CharacterCard";
import Axios from "axios";

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Nav = styled.nav`
  margin-top: 20px;
`;

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(err => {
        console.log("Error", err);
      });
  }, []);

  console.log("Data", characters);

  return (
    <Container>
      {characters.map(character => {
        return (
          <CharacterCard
            key={character.id}
            gender={character.gender}
            image={character.image}
            name={character.name}
            origin={character.origin.name}
            species={character.species}
            status={character.status}
          />
        );
      })}
    </Container>
  );
}
