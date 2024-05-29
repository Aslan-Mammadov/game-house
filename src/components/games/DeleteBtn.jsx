import { Button } from "@chakra-ui/react";
import React from "react";

const DeleteBtn = ({ deleteMyGame, game }) => {
  return (
    <Button
      colorScheme="red"
      variant="outline"
      border="1px solid"
      size="sm"
      onClick={() => {
        deleteMyGame(game);
      }}
    >
      Delete
    </Button>
  );
};

export default DeleteBtn;
