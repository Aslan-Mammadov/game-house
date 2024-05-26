import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Games from "./components/Games";
import Genres from "./components/Genres";
import { useState } from "react";
import PlatformList from "./components/PlatformList";

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  function changeGenre(id) {
    setSelectedGenre(id);
  }
  const platforms = [
    { name: "Android", id: 1 },
    { name: "dsfgdfg", id: 2 },
    { name: "Androiddf", id: 3 },
  ];
  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main' 'footer'`,
        md: `"nav nav"
    "aside main"
    "aside footer"`,
      }}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={{
        base: "1fr",
        md: "150px 1fr",
      }}
      h="200px"
      gap="1"
    >
      <GridItem pl="2" area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="md">
        <GridItem pl="2" area={"aside"}>
          <Genres changeGenre={changeGenre} selectedGenre={selectedGenre} />
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        <PlatformList platforms={platforms} marginY="20px" />
        <Games selectedGenre={selectedGenre} />
      </GridItem>
      <GridItem pl="2" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
