import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { Dispatch } from "redux";
import {
  ActionTypes,
  GetCategoriesAction,
  GetAlcoholicAction,
  GetIngredientsAction,
  GetGlassesAction,
  GetCocktailBySearching
} from "./types";
import * as api from "./api";

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

type GetCocktailByCategory = (
  filter: string,
  params: string
) => GetCocktailBySearching;
export const getCocktailBySearching: GetCocktailByCategory = (
  filter,
  params
) => {
  return {
    type: ActionTypes.GET_COCKTAIL_BY_SEARCHING,
    payload: api.getCocktailBySearching(filter, params)
  };
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
