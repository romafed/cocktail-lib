/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import {
  Category,
  Ingredient,
  Glass,
  Alcoholic,
  Cocktail
} from "../../store/search/actionsTypes";

import Select from "../../components/Select";
import Button from "../../components/Button";
import Spinner from "../../components/Spinner";
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

const Container = styled.div`
  display: flex;
`;

const view = ({
  handleGetAllList,
  categories,
  loading,
  getCocktailByCategory,
  cocktails
}: SearchProps) => {
  const [value, setValue] = useState("");
  const handleChange = (value: string): void => {
    setValue(value);
  };
  const handleSubmit = (): void => {
    getCocktailByCategory(value);
  };

  useEffect(() => {
    handleGetAllList();
  }, [handleGetAllList]);

  return (
    <StyledSearch>
      <Header>Search for your cocktail</Header>
      <Container>
        <Select
          onChange={handleChange}
          placeholder={"Select category"}
          options={categories}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </Container>
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
