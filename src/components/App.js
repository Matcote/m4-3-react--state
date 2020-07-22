import React from "react";

import GlobalStyles from "./GlobalStyles";
import data from "../data";
import Typeahead from "./Typeahead";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 50%;
  margin: 30px auto;
  vertical-align: center;
  ul {
    padding: 5px;
    border-radius: 4px;
    box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.75);
  }
`;

const App = (props) => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Typeahead
          suggestions={data.books}
          categories={data.categories}
          handleSelect={(suggestion) => {
            window.alert(suggestion);
          }}
        />
      </Wrapper>
    </>
  );
};

export default App;
