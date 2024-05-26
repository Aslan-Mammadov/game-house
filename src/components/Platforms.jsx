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
  import {BsGlobe} from "react-icons/bs";
import { Icon , HStack} from "@chakra-ui/react";



const GamePlatforms = ({ platforms }) => {
    const iconMap={
        pc:FaWindows,
        playstation: FaPlaystation,
        xbox:FaXbox,
        mac:FaApple,
        android:FaAndroid,
        linux:FaLinux,
        web: BsGlobe,
        nintendo: SiNintendo,
        ios:MdPhoneIphone,


    }
  return (
    <HStack marginY={'10px'}>
      {platforms.map((p) => (
        <Icon as ={iconMap[p.platform.slug]} fontSize={'25px'} color='gray.500' key={p.platform.id}/>
      ))}
    </HStack>
  );
};

export default GamePlatforms;
