import { Button } from "@chakra-ui/react";
import { FaTrashCan } from "react-icons/fa6";

const RemoveBtn = ({ removeGames, game, isSaved }) => {
  return (
    <Button
      colorScheme="red"
      variant="outline"
      border="1px solid"
      size="sm"
      isDisabled={!isSaved}
      onClick={() => {
        removeGames(game);
      }}
    >
      <FaTrashCan />
    </Button>
  );
};

export default RemoveBtn;
