import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Cocktail } from "../store/search/types";

const StyledCocktailCard = styled.div`
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  border: 2px solid yellow;
  border-radius: 0.7rem;
  transition: all 0.2s ease-in-out;
  transform: scale(1);
  cursor: pointer;
  &:hover,
  &:active {
    transform: scale(1.03);
    -webkit-box-shadow: 10px 10px 12px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 12px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 12px 0px rgba(0, 0, 0, 0.75);
    border-color: red;
  }
`;

const CocktailName = styled.h3`
  font-family: "Galada", cursive;
  letter-spacing: 2px;
  font-size: 1rem;
  color: #fff;
  text-align: center;
  white-space: pre-wrap;
`;

const CocktailImage = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: 1rem;
`;

const CocktailCard = ({ cocktail }: CocktailCardType) => {
  const history = useHistory();

  return (
    <StyledCocktailCard
      onClick={() => history.push(`details/${cocktail.idDrink}`)}>
      <CocktailName>{cocktail.strDrink}</CocktailName>
      <CocktailImage src={cocktail.strDrinkThumb} alt='cocktail name' />
    </StyledCocktailCard>
  );
};

interface CocktailCardType {
  cocktail: Cocktail;
}

export default CocktailCard;
