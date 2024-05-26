import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Games from "./components/Games";


function App() {
  return (
    <Grid
      templateAreas={`"nav nav"
    "aside main"
    "aside footer"`}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      h="200px"
      gap="1"
      color="blackAlpha.700"
    >
      <GridItem pl="2"  area={"nav"}>
       <NavBar/>
      </GridItem>
      <GridItem pl="2" area={"aside"}>
        Aside
      </GridItem>
      <GridItem pl="2"  area={"main"}>
      <Games/>
      </GridItem>
      <GridItem pl="2"  area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
