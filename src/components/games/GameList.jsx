import GameCard from "./GameCard";
import { HStack, Alert, AlertIcon } from "@chakra-ui/react";
import SkeletonGame from "./Skeleton";
import ModalBtn from "../ModalPreviousBtn";

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
    };


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
          No games have been found.
        </Alert>
      )}
      {isLoading && Skeletons}
      {Games}
      {games.length > 1 && (
        <HStack marginY="15px">
          <ModalBtn name={'Previous'}></ModalBtn>
          <ModalBtn name={'Next'}></ModalBtn>
       
        </HStack>
      )}
    </>
  );
};

export default GameList;
