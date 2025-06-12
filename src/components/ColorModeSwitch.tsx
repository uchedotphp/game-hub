import { HStack, Switch, Text } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack align="center" justify="flex-end" w="100%">
      <Switch.Root
        colorScheme="green"
        checked={colorMode === "dark"}
        onChange={toggleColorMode}
      >
        <Switch.HiddenInput />
        <Switch.Control />
        <Switch.Label>
          <Text whiteSpace='nowrap' textTransform="capitalize">{colorMode} Mode</Text>
        </Switch.Label>
      </Switch.Root>
    </HStack>
  );
};

export default ColorModeSwitch;
