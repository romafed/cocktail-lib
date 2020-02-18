import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Switch, Route, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";

import Search from "./containers/search";
import CocktailDetail from "./containers/details";
import Spinner from "./components/Spinner";

import { StateType } from "./store/rootReducer";

import BACKGROUND from "./assets/background.jpg";

const StyledApp = styled.div`
  background-image: url(${BACKGROUND});
  background-attachment: fixed;
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
  const location = useLocation();
  const transition = useTransition(location, location => location.pathname, {
    from: { position: "absolute", opacity: 0, transform: "translateY(-30px)" },
    enter: { position: "initial", opacity: 1, transform: "translateY(0)" },
    leave: { position: "absolute", opacity: 0, transform: "translateY(-30px)" }
  });
  const loadingOne = useSelector(
    (state: StateType) => state.detailsState.loading
  );
  const loadingTwo = useSelector(
    (state: StateType) => state.searchState.loading
  );
  return (
    <StyledApp>
      {transition.map(({ item, key, props }) => (
        <animated.div key={key} style={{ width: "100%", ...props }}>
          <Switch location={item}>
            <Route exact path='/details/:id' component={CocktailDetail} />
            <Route path='/' component={Search} />
          </Switch>
        </animated.div>
      ))}
      <Spinner show={loadingOne || loadingTwo} />
    </StyledApp>
  );
};

export default App;
