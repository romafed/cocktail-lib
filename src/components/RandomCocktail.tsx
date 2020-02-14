import React from "react";
import styled from "styled-components";

const StyledRandomCocktail = styled.div``;

const Title = styled.h4``;

const Image = styled.img``;

const RandomCocktail = ({}: RandomCocktailTypes) => {
  return (
    <StyledRandomCocktail>
      <Title>Title</Title>
    </StyledRandomCocktail>
  );
};

interface RandomCocktailTypes {
  getRandomCocktail: () => void;
  randomCocktail: any;
}

export default RandomCocktail;
