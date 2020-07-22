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
const Suggestion = styled.li`
  padding: 5px;
  font-size: large;
  &:hover {
    background-color: lightyellow;
  }
`;
const Prediction = styled.span`
  font-weight: bold;
`;
const Categorie = styled.span`
  font-size: medium;
  font-style: italic;
  span {
    color: purple;
  }
`;

const Typeahead = ({ suggestions, handleSelect, categories }) => {
  const [search, setSearch] = React.useState("");
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = React.useState(
    0
  );
  if (
    search.length > 1 &&
    suggestions.filter((obj) => {
      return obj.title.toLowerCase().includes(search.toLowerCase());
    }).length > 0
  ) {
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
            switch (ev.key) {
              case "Enter": {
                handleSelect(ev.target.value);
                return;
              }
              case "ArrowUp": {
                setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
                return;
              }
              case "ArrowDown": {
                setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
                return;
              }
            }
          }}
        />
        <Button onClick={() => setSearch("")}>Clear</Button>
        <ul>
          {suggestions
            .filter((obj) => {
              return obj.title.toLowerCase().includes(search.toLowerCase());
            })
            .map((suggestion, index) => {
              const isSelected =
                index === selectedSuggestionIndex ? true : false;
              return (
                <Suggestion
                  key={suggestion.id}
                  onClick={() => handleSelect(suggestion.title)}
                  style={{
                    background: isSelected
                      ? "hsla(50deg, 100%, 80%, 0.25)"
                      : "transparent",
                  }}
                  onMouseEnter={() => setSelectedSuggestionIndex(index)}
                >
                  <Prediction>
                    {suggestion.title.slice(
                      0,
                      suggestion.title
                        .toLowerCase()
                        .indexOf(search.toLowerCase())
                    )}
                  </Prediction>
                  {suggestion.title.slice(
                    suggestion.title
                      .toLowerCase()
                      .indexOf(search.toLowerCase()),
                    suggestion.title
                      .toLowerCase()
                      .indexOf(search.toLowerCase()) + search.length
                  )}
                  <Prediction>
                    {suggestion.title.slice(
                      suggestion.title
                        .toLowerCase()
                        .indexOf(search.toLowerCase()) + search.length,
                      suggestion.title.length
                    )}{" "}
                  </Prediction>
                  <Categorie>
                    in <span>{categories[suggestion.categoryId].name}</span>
                  </Categorie>
                </Suggestion>
              );
            })}
        </ul>
      </>
    );
  }
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
