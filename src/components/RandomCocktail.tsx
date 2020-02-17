import React, {FunctionComponent} from "react";
import styled from "styled-components";

const StyledRandomCocktail = styled.div``;

const Title = styled.h4``;

const Image = styled.img``;

const RandomCocktail: FunctionComponent<RandomCocktailProps> = () => {
  return (
    <StyledRandomCocktail>
      <Title>Title</Title>
    </StyledRandomCocktail>
  );
};

type RandomCocktailProps = {
  getRandomCocktail: () => void;
  randomCocktail: any;
}

export default RandomCocktail;
