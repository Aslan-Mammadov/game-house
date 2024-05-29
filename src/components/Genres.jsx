import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import apiClient from "../services/apiClient";
import { Button, HStack, Heading, Image, List, ListItem } from "@chakra-ui/react";


const Genres = ({ changeGenre, selectedGenre }) => {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    axios
      .get(apiClient("/genres"))
      .then((res) => {
        setGenres(res.data.results);
      })
  }, []);


  const Genres= genres.map((genre) => (
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
          color={genre.id === selectedGenre ? "lightgreen" : null}
          onClick={() => {
            changeGenre(genre);
          }}
          whiteSpace="wrap"
        >
          {genre.name}
        </Button>
      </HStack>
    </ListItem>
  ))

  return (
    <>
      <List marginY="40px">
        <Heading fontSize={30}>Genres</Heading>
        {Genres}
      </List>
    </>
  );
};

export default Genres;
