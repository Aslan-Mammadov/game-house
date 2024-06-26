import { Grid, GridItem, Heading, Show, Box} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameContainer from "./components/games/GameContainer";
import Genres from "./components/Genres";
import { useState } from "react";
import PlatformList from "./components/PlatformList";
import ShowSaved from "./components/ShowSaved";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [searchText, setSearchText] = useState(null);
  const [showSaved, setShowSaved] = useState(false);

  function selectPlatform(p) {
    setSelectedPlatform(p);
  }
  function changeGenre(genre) {
    setSelectedGenre(genre);
  }
  function onSearch(value) {
    setSearchText(value);
  }
  function handleShow(param) {
    setShowSaved(param);
  }

  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `"nav nav"
    "aside main"`,
      }}
      gridTemplateRows={"50px 1fr"}
      gridTemplateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      h="100vh"
      gap="1"
    >
      <GridItem pl="2" area={"nav"}>
        <NavBar onSearch={onSearch} />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={"aside"}>
          <Genres changeGenre={changeGenre} selectedGenre={selectedGenre} />
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        <PlatformList
          marginY="20px"
          selectPlatform={selectPlatform}
          selectedPlatform={selectedPlatform}
        />
        <ShowSaved handleShow={handleShow} showSaved={showSaved} />
        <Box>
          {searchText && <Heading paddingLeft={4}>{searchText}</Heading>}
        <GameContainer
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
          searchText={searchText}
          showSaved={showSaved}
        />
        </Box>
        
      </GridItem>
    </Grid>
  );
}

export default App;
