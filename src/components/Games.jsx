import React, { useEffect, useState } from "react";
import axios from "axios";
import apiClient from "../services/apiClient";
import {
  CardBody,
  SimpleGrid,
  Text,
  Card,
  Image,
  Heading,
  HStack,
} from "@chakra-ui/react";
import GamePlatforms from "./Platforms";
import ScorePoint from "./ScorePoint";

const Games = ({ selectedGenre, selectedPlatform }) => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
  let fetchingUrl = apiClient("/games");
  const index = fetchingUrl.indexOf("?");
  const genreTag = selectedGenre ? "genres=" + selectedGenre + "&" : "";
  const platformTag = selectedPlatform
    ? "parent_platforms=" + selectedPlatform.id + "&"
    : "";

  let clientApiAddress =
    fetchingUrl.slice(0, index + 1) +
    platformTag +
    genreTag +
    fetchingUrl.slice(index + 1);

  useEffect(() => {
    axios
      .get(clientApiAddress)
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => setError(err.message));
  }, [selectedGenre, selectedPlatform]);

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={3}
      padding={3}
    >
      {games.map((game) => (
        <Card
          key={game.id}
          borderRadius="25px"
          height={"450px"}
          overflow={"hidden"}
        >
          <Image
            src={game.background_image}
            objectFit="cover"
            height={"300px"}
          />
          <CardBody>
            <Heading fontSize="20px">{game.name}</Heading>
            <HStack justifyContent={"space-between"} marginY="10px">
              <GamePlatforms platforms={game.parent_platforms} />
              <ScorePoint score={game.metacritic}></ScorePoint>
            </HStack>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default Games;
