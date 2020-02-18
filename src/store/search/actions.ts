import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { Dispatch } from "redux";
import {
  ActionTypes,
  GetCategoriesAction,
  GetAlcoholicAction,
  GetIngredientsAction,
  GetGlassesAction,
  GetCocktailBySearching,
  SetCurrentSearchTypeAction,
  GetRandomCocktailAction
} from "./types";

import * as api from "./api";

// Simple Actions
type GetCategories = () => GetCategoriesAction;
const getCategories: GetCategories = () => {
  return {
    type: ActionTypes.GET_CATEGORIES_LIST,
    payload: api.getCategories()
  };
};

type GetAlcoholic = () => GetAlcoholicAction;
const getAlcoholic: GetAlcoholic = () => {
  return {
    type: ActionTypes.GET_ALCOHOLIC_LIST,
    payload: api.getAlcoholic()
  };
};

type GetIngredients = () => GetIngredientsAction;
const getIngredients: GetIngredients = () => {
  return {
    type: ActionTypes.GET_INGREDIENTS_LIST,
    payload: api.getIngredients()
  };
};

type GetGlasses = () => GetGlassesAction;
const getGlasses: GetGlasses = () => {
  return {
    type: ActionTypes.GET_GLASSES_LIST,
    payload: api.getGlasses()
  };
};

type SetCurrentSearchType = (type: string) => SetCurrentSearchTypeAction;
const setCurrentSearchType: SetCurrentSearchType = type => {
  return {
    type: ActionTypes.SET_CURRENT_SEARCH_TYPE,
    payload: type
  };
};

type GetCocktailBySearchingAction = (
  filter: string,
  params: string
) => GetCocktailBySearching;
const getCocktailBySearching: GetCocktailBySearchingAction = (
  filter,
  params
) => {
  return {
    type: ActionTypes.GET_COCKTAIL_BY_SEARCHING,
    payload: api.getCocktailBySearching(filter, params)
  };
};

type GetRandomCocktail = () => GetRandomCocktailAction;
export const getRandomCocktail: GetRandomCocktail = () => ({
  type: ActionTypes.GET_RANDOM_COCKTAIL,
  payload: api.getRandomCocktail()
});

// Thunk Actions
type HandleGetCocktailBySearching = (
  filter: string,
  params: string
) => ThunkAction<Promise<void>, {}, {}, AnyAction>;
export const handleGetCocktailBySearching: HandleGetCocktailBySearching = (
  filter,
  params
) => async (dispatch, getState: any) => {
  if (getState().searchState.currentSearchFilter === params) return;
  dispatch(setCurrentSearchType(params));
  dispatch(getCocktailBySearching(filter, params));
};

type HandleGetAllList = () => ThunkAction<Promise<void>, {}, {}, AnyAction>;
export const handleGetAllList: HandleGetAllList = () => async (
  dispatch: Dispatch,
  getState: any
) => {
  const {
    categories,
    alcoholics,
    ingredients,
    glasses
  } = getState().searchState;
  const isAlreadyInState =
    categories.length <= 0 ||
    alcoholics.length <= 0 ||
    ingredients.length <= 0 ||
    glasses.length <= 0;
  if (!isAlreadyInState) return;
  dispatch(getCategories());
  dispatch(getAlcoholic());
  dispatch(getIngredients());
  dispatch(getGlasses());
};
