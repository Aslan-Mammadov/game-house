import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import apiClient from "../services/apiClient";
import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";

const Genres = ({ changeGenre, selectedGenre }) => {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState([]);
  useEffect(() => {
    axios
      .get(apiClient("/genres"))
      .then((res) => setGenres(res.data.results))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <List marginY="40px">
      {genres.map((genre) => (
        <ListItem key={genre.id} marginY="15px">
          <HStack marginY="10px">
            <Image
              src={genre.image_background}
              boxSize="45px"
              borderRadius="12px"
            />
            <Button
              variant={"link"}
              fontWeight={genre.id === selectedGenre ? "bold" : null}
              color={genre.id === selectedGenre ? "blue" : null}
              onClick={() => {
                changeGenre(genre.id);
              }}
              whiteSpace="wrap"
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
