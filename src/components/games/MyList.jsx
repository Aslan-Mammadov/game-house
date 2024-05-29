import {
  CardBody,
  Card,
  Image,
  Heading,
  HStack,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import GamePlatforms from "./Platforms";
import ScorePoint from "./scorePoint/ScorePoint";
import RemoveBtn from "./RemoveBtn";
import DeleteBtn from "./DeleteBtn";

const MyList = ({ removeGames, savedGames, deleteMyGame }) => {
  return (
    <>
      {!savedGames.length && (
        <Alert status="info">
          <AlertIcon />
          No games has been saved
        </Alert>
      )}
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
              <DeleteBtn deleteMyGame={deleteMyGame} game={game}></DeleteBtn>
            </HStack>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default MyList;
