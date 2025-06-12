import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack
      width="100%"
      padding="10px"
    >
      <Image src={Logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
