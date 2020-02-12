/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import styled from "styled-components";

import {
  Category,
  Ingredient,
  Glass,
  Alcoholic
} from "../../store/search/actionsTypes";

import Select from "../../components/Select";

interface SearchProps {
  categories: Category[];
  ingredients: Ingredient[];
  glasses: Glass[];
  alcoholics: Alcoholic[];
  handleGetAllLIst: () => void;
}

const StyledSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

const Header = styled.h1`
  font-size: 2rem;
  color: #fff;
  display: inline-block;
  transition: all 0.3s ease-in-out;
`;

const view = ({ handleGetAllLIst, categories }: SearchProps) => {
  useEffect(() => {
    handleGetAllLIst();
  }, [handleGetAllLIst]);
  return (
    <StyledSearch>
      <Header>Search page</Header>
      <Select options={categories} />
    </StyledSearch>
  );
};

export default view;
