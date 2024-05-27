import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Games from "./components/Games";
import Genres from "./components/Genres";
import { useState } from "react";
import PlatformList from "./components/PlatformList";
import Footer from "./components/footer/Footer";


function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const[selectedPlatform, setSelectedPlatform] = useState(null);
  const [searchText, setSearchText] = useState(null);

  function selectPlatform(p){
    setSelectedPlatform(p)
  }
  function changeGenre(id) {
    setSelectedGenre(id);
  }
  function onSearch(value){
    setSearchText(value);
  }
  
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
        md: "200px 1fr",
      }}
      h="100vh"
      gap="1"
    >
      <GridItem pl="2" area={"nav"}>
        <NavBar onSearch={onSearch} />
      </GridItem>
      <Show above="md">
        <GridItem pl="2" area={"aside"}>
          <Genres changeGenre={changeGenre} selectedGenre={selectedGenre} />
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        <PlatformList  marginY="20px"  selectPlatform={selectPlatform} selectedPlatform={selectedPlatform}/>
        <Games selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} searchText={searchText}/>
      </GridItem>
      <GridItem pl="2" area={"footer"}>
        <Footer/>
      </GridItem>
    </Grid>
  );
}

export default App;
