import * as api from "./api";
import { ActionsTypes, GetCocktailDetailAction } from "./types";

type GetCocktailDetails = (cocktailId: string) => GetCocktailDetailAction;
export const getCocktailDetails: GetCocktailDetails = (cocktailId: string) => {
  return {
    type: ActionsTypes.GET_COCKTAIL_DETAILS,
    payload: api.getCocktailDetails(cocktailId)
  };
};
