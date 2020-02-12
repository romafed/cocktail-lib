import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import Search from "./containers/search";
import CocktailDetail from "./containers/cocktailDetail/view";

import BACKGROUND from "./assets/background.jpg";

const StyledApp = styled.div`
  background-image: url(${BACKGROUND});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <StyledApp>
      <Switch>
        <Route exact path='/details' component={CocktailDetail} />
        <Route path='/' component={Search} />
      </Switch>
    </StyledApp>
  );
};

export default App;
