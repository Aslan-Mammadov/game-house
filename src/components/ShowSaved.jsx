import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const Show = ({ handleShow, showSaved }) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        marginY="10px"
        marginX="10px"
      >
        {showSaved? 'Saved Games': 'All Games'}
      </MenuButton>
      <MenuList>
        <MenuItem
          onClick={() => {
            handleShow(false);
          }}
        >
          All
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleShow(true);
          }}
        >
          Saved
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Show;
