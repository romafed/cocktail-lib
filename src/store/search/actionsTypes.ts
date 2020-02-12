export enum ActionTypes {
  GET_ALCOHOLIC_LIST = "GET_ALCOHOLIC_LIST",
  GET_ALCOHOLIC_LIST_PENDING = "GET_ALCOHOLIC_LIST_PENDING",
  GET_ALCOHOLIC_LIST_FULFILLED = "GET_ALCOHOLIC_LIST_FULFILLED",
  GET_ALCOHOLIC_LIST_REJECTED = "GET_ALCOHOLIC_LIST_REJECTED",

  GET_INGREDIENTS_LIST = "GET_INGREDIENTS_LIST",
  GET_INGREDIENTS_LIST_PENDING = "GET_INGREDIENTS_LIST_PENDING",
  GET_INGREDIENTS_LIST_FULFILLED = "GET_INGREDIENTS_LIST_FULFILLED",
  GET_INGREDIENTS_LIST_REJECTED = "GET_INGREDIENTS_LIST_REJECTED",

  GET_GLASSES_LIST = "GET_GLASSES_LIST",
  GET_GLASSES_LIST_PENDING = "GET_GLASSES_LIST_PENDING",
  GET_GLASSES_LIST_FULFILLED = "GET_GLASSES_LIST_FULFILLED",
  GET_GLASSES_LIST_REJECTED = "GET_GLASSES_LIST_REJECTED",

  GET_CATEGORIES_LIST = "GET_CATEGORIES_LIST",
  GET_CATEGORIES_LIST_PENDING = "GET_CATEGORIES_LIST_PENDING",
  GET_CATEGORIES_LIST_FULFILLED = "GET_CATEGORIES_LIST_FULFILLED",
  GET_CATEGORIES_LIST_REJECTED = "GET_CATEGORIES_LIST_REJECTED"
}

// Common types
 export interface Category {
  strCategory: string;
};
 export interface Ingredient {
  strIngredient1: string;
}
 export interface Glass {
  strGlass: string;
}
 export interface Alcoholic {
  strAlcoholic: string;
}

// State type

export interface SearchState {
  categories: Category[];
  alcoholics: Alcoholic[];
  ingredients: Ingredient[];
  glasses: Glass[];
}

// Action types
export interface GetCategoriesAction {
  type: string;
  payload: Promise<Category[]>;
}

export interface GetAlcoholicAction {
  type: string;
  payload: Promise<Alcoholic[]>;
}

export interface GetIngredientsAction {
  type: string;
  payload: Promise<Ingredient[]>;
}

export interface GetGlassesAction {
  type: string;
  payload: Promise<Glass[]>;
}

export type SearchActionTypes =
  | GetCategoriesAction
  | GetAlcoholicAction
  | GetIngredientsAction
  | GetGlassesAction;
