import { Input, InputGroup, InputLeftElement, } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import './searchBox.css'

const SearchBox = ({onSearch}) => {
  let inputRef=useRef(null)
  return (
    <form onSubmit={(e)=>{
     e.preventDefault();
     if(inputRef) {
      onSearch(inputRef.current.value)
      inputRef.current.value=null
    }
    }}>
      <InputGroup>
      <InputLeftElement>
        <BsSearch />
      </InputLeftElement>
      <Input ref={inputRef} borderRadius="20px" placeholder="search games..." />
    </InputGroup>
    </form>
    
  );
};

export default SearchBox;
