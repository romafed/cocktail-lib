import { StateType } from "../rootReducer";

export const getCocktailDetailsSelector = (state: StateType) =>
  state.detailsState.cocktailDetails;

export const getLoadingSelector = (state: StateType) =>
  state.detailsState.loading;

export const getErrorSelector = (state: StateType) =>
  state.detailsState.error;
