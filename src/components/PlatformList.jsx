import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import axios from "axios";

const PlatformList = ({ selectPlatform, selectedPlatform }) => {
  const [platformList, setPlatformList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(apiClient("/platforms/lists/parents"))
      .then((res) => setPlatformList(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<BsChevronDown />}
        marginY="10px"
        marginX="10px"
      >
        {error && error}
        {selectedPlatform ? selectedPlatform.name : "Platforms"}
      </MenuButton>
      <MenuList>
        {platformList.map((p) => (
          <MenuItem
            key={p.id}
            onClick={() => {
              selectPlatform(p);
            }}
          >
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformList;
