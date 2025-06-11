import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      padding="10px"
    >
      <Image src={Logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
