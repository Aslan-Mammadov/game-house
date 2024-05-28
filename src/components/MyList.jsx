import { CardBody, Card, Image, Heading, HStack } from "@chakra-ui/react";
import GamePlatforms from "./Platforms";
import ScorePoint from "./scorePoint/ScorePoint";
import RemoveBtn from "./RemoveBtn";

const MyList = ({ removeGames, savedGames }) => {
  return (
    <>
      {savedGames.map((game) => (
        <Card
          key={game.id}
          borderRadius="25px"
          height={"450px"}
          overflow={"hidden"}
        >
          <Image
            src={game.background_image}
            objectFit="cover"
            height={"300px"}
          />
          <CardBody>
            <HStack justifyContent={"space-between"} marginY="10px">
              <GamePlatforms platforms={game.parent_platforms} />
              <ScorePoint score={game.metacritic}></ScorePoint>
            </HStack>
            <HStack justifyContent="space-between">
              <Heading fontSize="20px">{game.name}</Heading>
              <RemoveBtn removeGames={removeGames} game={game}></RemoveBtn>
            </HStack>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default MyList;
