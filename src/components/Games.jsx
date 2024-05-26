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

const Games = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(apiClient("/games"))
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => setError(err.message));
  }, []);

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
            <Heading>
              <Text>{game.name}</Text>
            </Heading>
            <HStack>
            <GamePlatforms platforms={game.parent_platforms} />
            </HStack>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default Games;
