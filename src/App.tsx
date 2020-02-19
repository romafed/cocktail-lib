import React, { CSSProperties } from "react";
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
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  background-image: url(${BACKGROUND});
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
`;

const styles: CSSProperties = {
  width: "100%",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
};

const App = () => {
  const location = useLocation();
  const transition = useTransition(location, location => location.pathname, {
    from: { opacity: 0, position: "absolute", transform: "translateY(-30px)" },
    enter: { opacity: 1, position: "relative", transform: "translateY(0)" },
    leave: { opacity: 0, position: "absolute", transform: "translateY(-30px)" }
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
        <animated.div key={key} style={{ ...props, ...styles }}>
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
