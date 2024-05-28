import React, { useEffect, useState } from "react";
import axios from "axios";
import apiClient from "../services/apiClient";
import { SimpleGrid } from "@chakra-ui/react";
import GameList from "./GameList";
import MyList from "./MyList";

const Games = ({ selectedGenre, selectedPlatform, searchText, showSaved }) => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
  const [savedGames, setSavedGames] = useState([]);
  let fetchingUrl = apiClient("/games");
  const index = fetchingUrl.indexOf("?");
  const genreTag = selectedGenre ? "genres=" + selectedGenre + "&" : "";
  const platformTag = selectedPlatform
    ? "parent_platforms=" + selectedPlatform.id + "&"
    : "";
  const searchTextTag = searchText ? "search=" + searchText + "&" : "";
  let clientApiAddress =
    fetchingUrl.slice(0, index + 1) +
    platformTag +
    genreTag +
    searchTextTag +
    fetchingUrl.slice(index + 1);

  function saveGames(value) {
    setSavedGames([...savedGames, value]);
  }
  function removeGames(value) {
    setSavedGames([...savedGames.filter((g) => g.id !== value.id)]);
  }

  useEffect(() => {
    axios
      .get(clientApiAddress)
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => setError(err.message));
  }, [selectedGenre, selectedPlatform, searchText]);

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={7}
      padding={3}
    >
      {showSaved ? (
        <MyList savedGames={savedGames} removeGames={removeGames}></MyList>
      ) : (
        <GameList games={games} saveGames={saveGames}></GameList>
      )}
    </SimpleGrid>
  );
};

export default Games;
