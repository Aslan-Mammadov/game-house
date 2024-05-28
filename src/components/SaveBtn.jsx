import { Button } from "@chakra-ui/react";
import { useState } from "react";

const SaveBtn = ({ saveGames, game }) => {
  const [saved, setSaved] = useState(false);
  return (
    <Button
      colorScheme={saved ? "green" : "teal"}
      isDisabled={saved ? true : false}
      variant="outline"
      border="1px solid"
      size="sm"
      onClick={() => {
        saveGames(game);
        setSaved(true);
      }}
    >
      {saved ? "Saved" : "Save"}
    </Button>
  );
};

export default SaveBtn;
