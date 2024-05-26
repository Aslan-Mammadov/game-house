import React, { useEffect, useState } from "react";
import axios from "axios";
import apiClient from "../services/apiClient";
import { CardBody, SimpleGrid, Text, Card, Image } from "@chakra-ui/react";

const Games = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
 
  useEffect(() => {
    axios
    .get(apiClient('/games'))
    .then((res) => {
      setGames(res.data.results)})
    .catch(err=> setError(err.message));
  }, []);

  return (
  <SimpleGrid
  columns={{sm:1, md:2, lg:3, xl:4}}
  spacing={3}
  padding={3}
  >
   {games.map((game)=><Card key={game.id}>
    <Image src={game.background_image}/>
    <CardBody>
      <Text>{game.name}</Text>
    </CardBody>
   </Card>
   )}
  </SimpleGrid>
  )
};


export default Games;
