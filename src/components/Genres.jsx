import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import apiClient from "../services/apiClient";
import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";

const Genres = () => {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState([]);
  useEffect(() => {
    axios
      .get(apiClient("/genres"))
      .then((res) => setGenres(res.data.results))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id}>
          <HStack marginY='10px'>
          <Image src={genre.image_background} boxSize='32px' borderRadius='12px'/>
          <Button
          variant={'link'}
          >
            {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default Genres;
