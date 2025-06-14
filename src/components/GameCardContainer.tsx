import { Box } from "@chakra-ui/react";

const GameCardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box width="100%" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
