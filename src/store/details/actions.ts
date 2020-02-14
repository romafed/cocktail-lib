import * as api from "./api";
import {
  ActionsTypes,
  GetCocktailDetailAction,
  SetIngredientForSearchAction
} from "./types";

type GetCocktailDetails = (cocktailId: string) => GetCocktailDetailAction;
export const getCocktailDetails: GetCocktailDetails = cocktailId => {
  return {
    type: ActionsTypes.GET_COCKTAIL_DETAILS,
    payload: api.getCocktailDetails(cocktailId)
  };
};

type SetIngredientForSearch = (
  ingredient: string
) => SetIngredientForSearchAction;
export const setIngredientForSearch: SetIngredientForSearch = ingredient => {
  return {
    type: ActionsTypes.SET_INGREDIENT,
    payload: ingredient
  };
};
