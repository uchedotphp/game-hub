import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Button, HStack, Image, List, Spinner } from "@chakra-ui/react";

interface GenreProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: GenreProps) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner size="xl" />;

  return (
    <List.Root variant="plain">
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
              asChild
              variant="plain"
              fontSize="lg"
            >
              <a href="#">{genre.name}</a>
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
