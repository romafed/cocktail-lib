/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, FunctionComponent } from "react";
import styled from "styled-components";

import {
  Category,
  Ingredient,
  Glass,
  Alcoholic,
  Cocktail
} from "../../store/search/types";

import SearchForm from "../../components/SearchForm";
import CocktailList from "../../components/CocktailList";

// Styles
const StyledSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
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
      <CocktailList cocktails={cocktails} />
    </StyledSearch>
  );
};

interface SearchProps {
  location: any;
  filters: Array<string>;
  categories: Category[];
  ingredients: Ingredient[];
  glasses: Glass[];
  alcoholics: Alcoholic[];
  cocktails: Cocktail[];
  loading: Boolean;
  ingredientForSearch: string;
  handleGetAllList: () => void;
  handleGetCocktailBySearching: (filter: string, params: string) => void;
  setIngredientForSearch: (ingredient: string) => void;
}

export default view;
