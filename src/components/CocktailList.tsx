import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";
import { Cocktail } from "../store/search/types";

import CocktailCard from "./CocktailCard";

const ListWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 1rem;
  padding: 1rem;
`;

const CocktailList: FunctionComponent<CocktailListProps> = ({ cocktails }) => {
  const transitions = useTransition(cocktails, cocktail => cocktail.idDrink, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 }
  });

  return (
    <ListWrapper>
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <CocktailCard cocktail={item} />
        </animated.div>
      ))}
    </ListWrapper>
  );
};

type CocktailListProps = {
  cocktails: Cocktail[];
};

export default CocktailList;
