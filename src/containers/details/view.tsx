/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import styled from "styled-components";

import Text from "../../components/Text";

import * as utils from "../../utils";

const StyledCocktailDetail = styled.div`
  font-size: 2rem;
  box-sizing: border-box;
  position: relative;
  width: 70%;
  height: 90vh;
  display: grid;
  grid-gap: 1em;
  grid-template-rows: 50% 50%;
  grid-template-columns: 50% 50%;
  justify-content: center;
  color: #fff;
  margin: 0;
  padding: 1em;
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    grid-template-rows: auto;
    grid-template-columns: 100%;
  }
  @media (max-width: 850px) {
    font-size: 1.5rem;
  }
  @media (max-width: 1350px) {
    width: 100%;
  }
  @media (max-width: 1695px) {
    img {
      width: 100%;
    }
  }
`;

const Description = styled.div`
  font-size: 0.4em;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  padding: 1em;
`;

const Ingredients = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1em;
  border-radius: 10px;
  font-size: 0.6em;
  grid-row: 1/3;
`;

const Thumb = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1em;
  border-radius: 10px;
`;

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  -webkit-box-shadow: 10px 10px 12px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 12px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 12px 0px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
`;

const MainText: any = styled.h1`
  display: inline-block;
  width: 100%;
  position: ${(props: any) => props.position || "initial"};
  font-size: ${(props: any) => props.fontSize};
  font-family: "Galada", cursive;
  text-align: ${(props: any) => props.align || "left"};
  color: yellow;
  display: inline-block;
  transition: all 0.3s ease-in-out;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  margin: 0;
`;

const Item: any = styled.li`
  font-family: "Galada", cursive;
  letter-spacing: 3px;
  margin: 0.7em;
  font-size: 0.7em;
  transition: all 0.3s ease-in-out;
  transform: scale(1);
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    text-shadow: 2px 2px 2px rgba(206, 89, 55, 0);
  }
`;

const view = ({
  match,
  history,
  cocktailDetails,
  error,
  getCocktailDetails,
  setIngredientForSearch
}: ViewPropsType) => {
  const handleIngredientForSearch = (item: string) => {
    setIngredientForSearch(item);
    history.push("/");
  };

  useEffect(() => {
    getCocktailDetails(match.params.id);
    if (error) history.push("/");
  }, [error]);

  return (
    <StyledCocktailDetail>
      <Thumb>
        <MainText align='center' position='absolute' fontSize='1em'>
          {cocktailDetails.strDrink}
        </MainText>
        <Image src={cocktailDetails.strDrinkThumb} />
      </Thumb>
      <Ingredients>
        <MainText align='center' fontSize='1.5em'>
          Ingredients & Other:
        </MainText>
        <MainText fontSize='1.3em'>Other: </MainText>
        <Text title='Alcohol: ' show={cocktailDetails.strAlcoholic}>
          {cocktailDetails.strAlcoholic}
        </Text>
        <Text title='Category: ' show={cocktailDetails.strCategory}>
          {cocktailDetails.strCategory}
        </Text>
        <Text title='Type of glass: ' show={cocktailDetails.strGlass}>
          {cocktailDetails.strGlass}
        </Text>
        <MainText fontSize='1.3em'>Ingredients: </MainText>
        <ol>
          {utils.arrayOfIngredients(cocktailDetails).map((item, index) => (
            <Item onClick={() => handleIngredientForSearch(item)} key={index}>
              {item}
            </Item>
          ))}
        </ol>
      </Ingredients>
      <Description>
        <MainText fontSize='1.6em'>Description</MainText>
        <p>{cocktailDetails.strInstructions}</p>
      </Description>
    </StyledCocktailDetail>
  );
};

interface ViewPropsType {
  history: any;
  match: any;
  loading: Boolean;
  cocktailDetails: any;
  error: Boolean;
  getCocktailDetails: (cocktailId: string) => void;
  setIngredientForSearch: (ingredient: string) => void;
}

export default view;
