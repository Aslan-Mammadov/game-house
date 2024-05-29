import { Button } from "@chakra-ui/react";

const SaveBtn = ({ saveGames, game, isSaved }) => {
  return (
    <Button
      colorScheme={isSaved ? "green" : "teal"}
      isDisabled={isSaved}
      variant="outline"
      border="1px solid"
      size="sm"
      onClick={() => {
        saveGames(game);
      }}
    >
      {isSaved ? "Saved" : "Save"}
    </Button>
  );
};

export default SaveBtn;
