import React from "react";
import logo from "../assets/cube_logo.png";
import { HStack, Image, Switch, useColorMode, Text } from "@chakra-ui/react";
import SearchBox from "./SearchBox";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Image src={logo} boxSize="55px" />
      <SearchBox />
      <Switch paddingX="10px" onChange={toggleColorMode} isChecked={colorMode==='dark'}/>
      <Text whiteSpace='nowrap'>Dark Mode</Text>
    </HStack>
  );
};

export default NavBar;
