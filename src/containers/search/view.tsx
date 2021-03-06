/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, FunctionComponent } from "react";
import styled from "styled-components";
import { RouteComponentProps } from "react-router-dom";

import {
  Category,
  Ingredient,
  Glass,
  Alcoholic,
  Cocktail
} from "../../store/search/types";

import SearchForm from "../../components/SearchForm";
import CocktailList from "../../components/CocktailList";
import RandomCocktail from "../../components/RandomCocktail";

// Styled Component
const StyledSearch = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
`;

const Header = styled.h1`
  font-family: "Galada", cursive;
  font-size: 2rem;
  font-weight: lighter;
  color: yellow;
  display: inline-block;
  transition: all 0.3s ease-in-out;
`;

const view: FunctionComponent<SearchProps> = ({
  filters,
  categories,
  ingredients,
  alcoholics,
  glasses,
  cocktails,
  randomCocktail,
  getRandomCocktail,
  handleGetAllList,
  setIngredientForSearch,
  ingredientForSearch,
  handleGetCocktailBySearching
}) => {
  useEffect(() => {
    handleGetAllList();
    if (ingredientForSearch) {
      handleGetCocktailBySearching("ingredients", ingredientForSearch);
      setIngredientForSearch("");
    }
  }, [ingredientForSearch, handleGetCocktailBySearching, handleGetAllList]);

  return (
    <StyledSearch>
      <Header>Search for your cocktail</Header>
      <SearchForm
        ingredientForSearch={ingredientForSearch}
        filters={filters}
        values={{
          ingredients,
          categories,
          alcoholics,
          glasses
        }}
        onSubmitForm={handleGetCocktailBySearching}
      />
      {cocktails.length <= 0 ? (
        <RandomCocktail
          randomCocktail={randomCocktail}
          getRandomCocktail={getRandomCocktail}
        />
      ) : (
        <CocktailList cocktails={cocktails} />
      )}
    </StyledSearch>
  );
};

interface SearchProps extends RouteComponentProps<any> {
  filters: Array<string>;
  categories: Category[];
  ingredients: Ingredient[];
  glasses: Glass[];
  alcoholics: Alcoholic[];
  cocktails: Cocktail[];
  loading: Boolean;
  ingredientForSearch: string;
  randomCocktail: {} | undefined;
  getRandomCocktail: () => void;
  handleGetAllList: () => void;
  handleGetCocktailBySearching: (filter: string, params: string) => void;
  setIngredientForSearch: (ingredient: string) => void;
}

export default view;
