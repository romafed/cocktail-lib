import { StateType } from "../rootReducer";

export const getCategoriesSelector = (state: StateType) =>
  state.searchState.categories;

export const getAlcoholicSelector = (state: StateType) =>
  state.searchState.alcoholics;

export const getIngredientsSelector = (state: StateType) =>
  state.searchState.ingredients;

export const getGlassesSelector = (state: StateType) =>
  state.searchState.glasses;

export const getLoadingSelector = (state: StateType) =>
  state.searchState.loading;

export const getCocktailsSelector = (state: StateType) =>
  state.searchState.cocktails;

export const getFiltersSelector = (state: StateType) =>
  state.searchState.filters;
