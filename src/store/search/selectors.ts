import {StateType} from '../rootReducer';

export const getCategoriesSelector = (state: StateType) =>
  state.searchState.categories;

export const  getAlcoholicSelector = (state: StateType) =>
  state.searchState.alcoholics;

export const getIngredientsSelector = (state: StateType) =>
  state.searchState.ingredients;

export const getGlassesSelector = (state: StateType) =>
  state.searchState.glasses;
