import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: white;
  background-color: blue;
  padding: 8px;
  border-radius: 4px;
  border: none;
`;
const Input = styled.input`
  border-radius: 4px;
  padding: 8px;
  border: 1px solid grey;
  margin: 5px;
`;

const Typeahead = ({ suggestions, handleSelect }) => {
  const [search, setSearch] = React.useState("");
  return (
    <>
      <Input
        type="text"
        name="searchBox"
        value={search}
        onChange={(ev) => {
          setSearch(ev.target.value);
        }}
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            return search;
          }
        }}
      />
      <Button onClick={() => setSearch("")}>Clear</Button>
    </>
  );
};

export default Typeahead;
