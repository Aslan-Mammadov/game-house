import {
  CardBody,
  Card,
  Heading,
  HStack,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import ImageCarousel from "../Carousel";
import GamePlatforms from "./Platforms";
import ScorePoint from "./scorePoint/ScorePoint";
import DeleteBtn from "./DeleteBtn";

const MyList = ({ savedGames, deleteMyGame }) => {
  const SavedGames = savedGames.map((game) => (
    <Card
      key={game.id}
      borderRadius="25px"
      height={"450px"}
      overflow={"hidden"}
    >
      <ImageCarousel game={game}></ImageCarousel>
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
  ));
  return (
    <>
      {!savedGames.length && (
        <Alert status="info">
          <AlertIcon />
          No games have been saved
        </Alert>
      )}
      {SavedGames}
    </>
  );
};

export default MyList;
