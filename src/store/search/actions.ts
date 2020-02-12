import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";
import { Dispatch } from "redux";
import {
  ActionTypes,
  GetCategoriesAction,
  GetAlcoholicAction,
  GetIngredientsAction,
  GetGlassesAction,
  GetGetCocktailByCategoryAction
} from "./actionsTypes";
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

type GetCocktailByCategory = (category: string) => GetGetCocktailByCategoryAction;
export const getCocktailByCategory: GetCocktailByCategory = (category: string) => {
  return {
    type: ActionTypes.GET_COCKTAIL_BY_CATEGORY,
    payload: api.getCocktailByCategory(category),
  }
};

type HandleGetAllList = () => ThunkAction<Promise<void>,{},{},AnyAction>;
export const handleGetAllList: HandleGetAllList = () => async (
  dispatch: Dispatch
) => {
  dispatch(getCategories());
  dispatch(getAlcoholic());
  dispatch(getIngredients());
  dispatch(getGlasses());
};
