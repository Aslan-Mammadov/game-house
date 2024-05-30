import { CardBody, Card, Image, Heading, HStack } from "@chakra-ui/react";
import GamePlatforms from "./Platforms";
import ScorePoint from "./scorePoint/ScorePoint";
import SaveBtn from "./SaveBtn";
import RemoveBtn from "./RemoveBtn";
import ImageCarousel from "../Carousel";

const GameCard = ({ game, saveGames, isSaved, removeGames }) => {
  return (
    <Card
      key={game.id}
      borderRadius="25px"
      height={"450px"}
      overflow={"hidden"}
    >
      <ImageCarousel game={game} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginY="10px">
          <GamePlatforms platforms={game.parent_platforms} />
          <ScorePoint score={game.metacritic}></ScorePoint>
        </HStack>
        <HStack justifyContent="space-between">
          <Heading fontSize="20px">{game.name}</Heading>
          <HStack>
            <SaveBtn
              saveGames={saveGames}
              game={game}
              isSaved={isSaved}
            ></SaveBtn>
            <RemoveBtn
             removeGames={removeGames}
              game={game}
              isSaved={isSaved}
              ></RemoveBtn>
          </HStack>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
