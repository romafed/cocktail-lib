export enum ActionsTypes {
  GET_COCKTAIL_DETAILS = "GET_COCKTAIL_DETAILS",
  GET_COCKTAIL_DETAILS_PENDING = "GET_COCKTAIL_DETAILS_PENDING",
  GET_COCKTAIL_DETAILS_FULFILLED = "GET_COCKTAIL_DETAILS_FULFILLED",
  GET_COCKTAIL_DETAILS_REJECTED = "GET_COCKTAIL_DETAILS_REJECTED",

  SET_INGREDIENT = "SET_INGREDIENT"
}

export interface GetCocktailDetailAction {
  type: string;
  payload: Promise<any>;
}

export interface SetIngredientForSearchAction {
  type: string;
  payload: string;
}
