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
  GET_CATEGORIES_LIST_REJECTED = "GET_CATEGORIES_LIST_REJECTED",

  GET_COCKTAIL_BY_CATEGORY = "GET_COCKTAIL_BY_CATEGORY",
  GET_COCKTAIL_BY_CATEGORY_PENDING = "GET_COCKTAIL_BY_CATEGORY_PENDING",
  GET_COCKTAIL_BY_CATEGORY_FULFILLED = "GET_COCKTAIL_BY_CATEGORY_FULFILLED",
  GET_COCKTAIL_BY_CATEGORY_REJECTED = "GET_COCKTAIL_BY_CATEGORY_REJECTED"
}

// Common types
export interface Category {
  strCategory: string;
}
export interface Ingredient {
  strIngredient1: string;
}
export interface Glass {
  strGlass: string;
}
export interface Alcoholic {
  strAlcoholic: string;
}

export interface Cocktail {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}
// State type

export interface SearchState {
  loading: Boolean;
  filters: Array<string>;
  categories: Category[];
  alcoholics: Alcoholic[];
  ingredients: Ingredient[];
  glasses: Glass[];
  cocktails: Cocktail[];
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

export interface GetCocktailBySearching {
  type: string;
  payload: Promise<Cocktail[]>;
}

export type SearchActionTypes =
  | GetCategoriesAction
  | GetAlcoholicAction
  | GetIngredientsAction
  | GetGlassesAction
  | GetCocktailBySearching;
