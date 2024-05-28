import {
    CardBody,
    Card,
    Image,
    Heading,
    HStack,
  } from "@chakra-ui/react";
  import GamePlatforms from "./Platforms";
  import ScorePoint from "./scorePoint/ScorePoint";
import SaveBtn from "./SaveBtn";

const GameList = ({games, saveGames}) => {
  return (
    <>
    {games.map((game) => (
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
            <HStack justifyContent='space-between'>
            <Heading fontSize="20px">{game.name}</Heading>
            <SaveBtn saveGames={saveGames} game={game}></SaveBtn>
            </HStack>
          </CardBody>
        </Card>
      ))}
      </>
  )
}

export default GameList
