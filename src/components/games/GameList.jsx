import GameCard from "./GameCard";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { Button, HStack, Alert, AlertIcon } from "@chakra-ui/react";
import SkeletonGame from "./Skeleton";

const GameList = ({ games, saveGames, isLoading, savedGames, removeGames }) => {
  let Skeletons = null;
  if (isLoading) {
    Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((s) => (
      <SkeletonGame key={s}></SkeletonGame>
    ));
  }

  const Games = games.map((game) => {
    let displayedGame = savedGames.find((g) => g.id === game.id);
    let isSaved;
    if (typeof displayedGame === "undefined") {
      isSaved = false;
      displayedGame = game;
    } else {
      isSaved = true;
    }
    return (
      <GameCard
        game={displayedGame}
        saveGames={saveGames}
        key={game.id}
        isSaved={isSaved}
        removeGames={removeGames}
      />
    );
  });
  return (
    <>
      {!games.length && !isLoading && (
        <Alert status="warning" alignContent={"center"}>
          <AlertIcon />
          No games has found.
        </Alert>
      )}
      {isLoading && Skeletons}
      {Games}
      {games.length > 1 && (
        <HStack marginY="15px">
          <Button leftIcon={<GrLinkPrevious />}>Previous</Button>
          <Button rightIcon={<GrLinkNext />}> Next Page</Button>
        </HStack>
      )}
    </>
  );
};

export default GameList;
