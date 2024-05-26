import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const PlatformList = ({ platforms }) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        marginY="10px"
        marginX="10px"
      >
        Platforms
      </MenuButton>
      <MenuList>
        {platforms.map((p) => (
          <MenuItem key={p.id}>{p.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformList;
