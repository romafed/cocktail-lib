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

const view = ({ handleGetAllList, categories, alcoholics }: SearchProps) => {
  useEffect(() => {
    handleGetAllList();
  }, [handleGetAllList]);
  return (
    <StyledSearch>
      <Header>Search page</Header>
      <Select placeholder={"Select category"} options={categories} />
    </StyledSearch>
  );
};

interface SearchProps {
  categories: Category[];
  ingredients: Ingredient[];
  glasses: Glass[];
  alcoholics: Alcoholic[];
  handleGetAllList: () => void;
}

export default view;
