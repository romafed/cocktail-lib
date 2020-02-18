export enum ActionsTypes {
  GET_COCKTAIL_DETAILS = "GET_COCKTAIL_DETAILS",
  GET_COCKTAIL_DETAILS_PENDING = "GET_COCKTAIL_DETAILS_PENDING",
  GET_COCKTAIL_DETAILS_FULFILLED = "GET_COCKTAIL_DETAILS_FULFILLED",
  GET_COCKTAIL_DETAILS_REJECTED = "GET_COCKTAIL_DETAILS_REJECTED",

  SET_INGREDIENT = "SET_INGREDIENT"
}
//DETAILS STATE

export interface DetailsState {
  loading: Boolean;
  ingredientForSearch: string;
  cocktailDetails: {};
  error: Boolean;
}

// Action Types
export interface GetCocktailDetailAction {
  type: string;
  payload: Promise<any>;
}

export interface SetIngredientForSearchAction {
  type: string;
  payload: string;
}
