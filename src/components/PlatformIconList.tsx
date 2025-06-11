import { HStack, Icon } from "@chakra-ui/react";
import type { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons";

interface PlatformIconListProps {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  const iconMa: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: SiNintendo,
    web: BsGlobe,
  };
  return (
    <HStack marginY={4}>
      {platforms.map((platform) => (
        <Icon as={iconMa[platform.slug]} color='gray.500' />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
