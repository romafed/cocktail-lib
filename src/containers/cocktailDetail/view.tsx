import React from "react";
import styled from "styled-components";

const StyledCocktailDetail = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;

const Header = styled.h1`
  font-size: 2rem;
  color: #fff;
  display: inline-block;
  transition: all 0.3s ease-in-out;
`;

const view = () => {
  return (
    <StyledCocktailDetail>
      <Header>Cocktail detail page</Header>
    </StyledCocktailDetail>
  );
};

export default view;
