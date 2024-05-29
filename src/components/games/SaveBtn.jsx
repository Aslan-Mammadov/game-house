import { Button } from "@chakra-ui/react";
import { MdOutlineSaveAlt } from "react-icons/md";

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
      <MdOutlineSaveAlt/>
    </Button>
  );
};

export default SaveBtn;
