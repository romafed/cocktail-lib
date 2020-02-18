import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";

import Search from "./containers/search";
import CocktailDetail from "./containers/details";
import Spinner from "./components/Spinner";

import { StateType } from './store/rootReducer'

import BACKGROUND from "./assets/background.jpg";

const StyledApp = styled.div`
  background-image: url(${BACKGROUND});
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

const App = () => {
  const loadingOne = useSelector((state: StateType) => state.detailsState.loading);
  const loadingTwo = useSelector((state: StateType) => state.searchState.loading);
  return (
    <StyledApp>
      <Switch>
        <Route exact path='/details/:id' component={CocktailDetail} />
        <Route path='/' component={Search} />
      </Switch>
      <Spinner show={loadingOne || loadingTwo} />
    </StyledApp>
  );
};

export default App;
