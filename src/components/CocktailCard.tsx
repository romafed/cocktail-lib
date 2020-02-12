import React from "react";
import styled from "styled-components";
import { Cocktail } from "../store/search/actionsTypes";

const StyledCocktailCard = styled.div`
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  border: 2px solid yellow;
  border-radius: 0.7rem;
  transition: all 0.3s ease-in-out;
  transform: scale(1);
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
    -webkit-box-shadow: 10px 10px 12px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 12px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 12px 0px rgba(0, 0, 0, 0.75);
  }
`;

const CocktailName = styled.h3`
  font-size: 1rem;
  color: #fff;
  text-align: center;
`;

const CocktailImage = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: 1rem;
`;

const CocktailCard = ({ cocktail }: CocktailCardType) => {
  return (
    <StyledCocktailCard>
      <CocktailName>{cocktail.strDrink}</CocktailName>
      <CocktailImage src={cocktail.strDrinkThumb} alt='cocktail name' />
    </StyledCocktailCard>
  );
};

interface CocktailCardType {
  cocktail: Cocktail;
}

export default CocktailCard;
