import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef, useState } from "react";
import "./searchBox.css";
import ErrorMsg from "../errorMessages/ErrorMsg";

const SearchBox = ({ onSearch }) => {
  let inputRef = useRef(null);
  const [error, setError] = useState();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (inputRef.current.value.trim()) {
          onSearch(inputRef.current.value);
          inputRef.current.value = null;
        } else {
          inputRef.current.value = null;
        }
      }}
    >
      <InputGroup>
        <InputLeftElement>
          <BsSearch />
        </InputLeftElement>
        <Input
          ref={inputRef}
          borderRadius="20px"
          placeholder="search games..."
          required
          minLength="3"
        />
        {error && <ErrorMsg error={error} />}
      </InputGroup>
    </form>
  );
};

export default SearchBox;
