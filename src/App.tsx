import { Grid, GridItem, Text } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area="nav" display='flex' alignItems='center'>
        <Navbar />
        <Text>Navbar</Text>
      </GridItem>
      <GridItem area="aside" bg="gold" hideBelow='lg'>
        Aside
      </GridItem>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
