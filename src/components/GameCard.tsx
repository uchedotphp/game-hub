import { Card, Heading, Image } from "@chakra-ui/react";
import type { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image
        src={game.background_image}
        alt="Game thumbnail"
        borderRadius="md"
        boxSize="150px"
      />
      <Card.Body>
        <Heading as="h3" fontSize="2xl">
          {game.name}
        </Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
