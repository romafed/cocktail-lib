/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import styled from "styled-components";

import {
  Category,
  Ingredient,
  Glass,
  Alcoholic,
  Cocktail
} from "../../store/search/actionsTypes";

import Spinner from "../../components/Spinner";
import SearchForm from "../../components/SearchForm";
import CocktailList from "../../components/CocktailList";

// Styles
const StyledSearch = styled.div`
  position: relative;
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

const view = ({
  loading,
  categories,
  cocktails,
  handleGetAllList,
  getCocktailByCategory
}: SearchProps) => {
  useEffect(() => {
    handleGetAllList();
  }, [handleGetAllList]);

  return (
    <StyledSearch>
      <Header>Search for your cocktail</Header>
      <SearchForm
        onSubmitForm={getCocktailByCategory}
        categories={categories}
      />
      <CocktailList cocktails={cocktails} />
      <Spinner show={loading} />
    </StyledSearch>
  );
};

interface SearchProps {
  categories: Category[];
  ingredients: Ingredient[];
  glasses: Glass[];
  alcoholics: Alcoholic[];
  cocktails: Cocktail[];
  loading: Boolean;
  handleGetAllList: () => void;
  getCocktailByCategory: (category: string) => void;
}

export default view;
