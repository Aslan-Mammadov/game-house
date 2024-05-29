import React, { useEffect, useState } from "react";
import axios from "axios";
import apiClient from "../../services/apiClient";
import { SimpleGrid, Grid } from "@chakra-ui/react";
import GameList from "./GameList";
import MyList from "./MyList";
import ErrorMsg from "../errorMessages/ErrorMsg";

const Games = ({ selectedGenre, selectedPlatform, searchText, showSaved }) => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
  const [savedGames, setSavedGames] = useState([]);
  const [isLoading, setLoading] = useState(false);
  let fetchingUrl = apiClient("/games");
  const index = fetchingUrl.indexOf("?");
  const genreTag = selectedGenre ? "genres=" + selectedGenre + "&" : "";
  const platformTag = selectedPlatform
    ? "parent_platforms=" + selectedPlatform.id + "&"
    : "";
  const searchTextTag = searchText ? "search=" + searchText + "&" : "";

  const clientApiAddress =
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
    setLoading(true);
    axios
      .get(clientApiAddress)
      .then((res) => {
        setLoading(false);
        setGames([...res.data.results]);
      })
      .catch((err) => setError(err.message));
  }, [selectedGenre, selectedPlatform, searchText]);

  return (
    <Grid>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={7}
        padding={3}
      >
        {error && <ErrorMsg error={error}></ErrorMsg>}
        {showSaved ? (
          <MyList savedGames={savedGames} removeGames={removeGames}></MyList>
        ) : (
          <GameList
            games={games}
            saveGames={saveGames}
            isLoading={isLoading}
            savedGames={savedGames}
          ></GameList>
        )}
      </SimpleGrid>
    </Grid>
  );
};

export default Games;
