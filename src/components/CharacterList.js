import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CharacterCard from "./CharacterCard";
import Axios from "axios";

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function CharacterList(props) {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  const filterList = name => {
    const filteredList = characters.filter(character =>
      character.name.toLowerCase().includes(name.toLowerCase())
    );
    setFilteredCharacters(filteredList);
  };

  const getData = () => {
    Axios.get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(err => {
        console.log("Error", err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    filterList(props.nameToSearch);
  }, [props.nameToSearch]);

  if (filteredCharacters.length > 0) {
    return (
      <Container>
        {filteredCharacters.map(character => {
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
