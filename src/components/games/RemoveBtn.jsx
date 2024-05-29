import { Button } from "@chakra-ui/react";
import React from "react";

const RemoveBtn = ({ removeGames, game }) => {
  return (
    <Button
      colorScheme="red"
      variant="outline"
      border="1px solid"
      size="sm"
      onClick={() => {
        removeGames(game);
      }}
    >
      Remove
    </Button>
  );
};

export default RemoveBtn;
