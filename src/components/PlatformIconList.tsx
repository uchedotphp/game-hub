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
import { PiShootingStar } from "react-icons/pi";
import {
  SiNintendo,
  SiPlaystation2,
  SiPlaystation3,
  SiPlaystation4,
  SiPlaystation5,
  SiSega,
  SiCommodore,
  SiAtari
} from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons";

interface PlatformIconListProps {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  const iconMa: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    playstation5: SiPlaystation5,
    playstation4: SiPlaystation4,
    playstation3: SiPlaystation3,
    playstation2: SiPlaystation2,
    playstation1: FaPlaystation,
    "ps-vita": FaPlaystation,
    xbox: FaXbox,
    "xbox-one": FaXbox,
    "xbox-old": FaXbox,
    xbox360: FaXbox,
    "xbox-series-x": FaXbox,
    "xbox-series-s": FaXbox,
    ios: MdPhoneIphone,
    mac: FaApple,
    macos: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: SiNintendo,
    wii: SiNintendo,
    "nintendo-switch": SiNintendo,
    "game-boy": SiNintendo,
    "game-boy-advance": SiNintendo,
    commodore: SiCommodore,
    "commodore-amiga": SiCommodore,
    web: BsGlobe,
    dreamcast: SiSega,
    sega: SiSega,
    genesis: PiShootingStar,
    atari: SiAtari,
    "atari-st": SiAtari,
  };
  return (
    <HStack marginY={4}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMa[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
