import React, { useState } from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";

export default function App() {
  const [nameToSearch, setNameToSearch] = useState();

  return (
    <main>
      <Header />
      <Nav />
      <Route exact path="/" component={WelcomePage} />
      <Route
        path="/characters"
        render={props => (
          <SearchForm
            {...props}
            setNameToSearch={setNameToSearch}
            nameToSearch={nameToSearch}
          />
        )}
      />
      <Route
        path="/characters"
        render={props => (
          <CharacterList
            {...props}
            nameToSearch={nameToSearch}
            setNameToSearch={setNameToSearch}
          />
        )}
      />
    </main>
  );
}
