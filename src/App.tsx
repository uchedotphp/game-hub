import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area="nav" display="flex" alignItems="center">
        <Navbar />
      </GridItem>
      <GridItem area="aside" hideBelow="lg">
        Aside
      </GridItem>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
