import { ActionTypes, SearchState } from "./types";
import { AnyAction } from "redux";

const initialState: SearchState = {
  loading: false,
  currentSearchFilter: "",
  filters: ["Categories", "Ingredients", "Alcoholics", "Glasses"],
  categories: [],
  ingredients: [],
  glasses: [],
  alcoholics: [],
  cocktails: [],
  randomCocktail: {}
};

export default (state = initialState, action: AnyAction): SearchState => {
  switch (action.type) {
    case ActionTypes.GET_CATEGORIES_LIST_PENDING:
      return {
        ...state,
        loading: true
      };
    case ActionTypes.GET_CATEGORIES_LIST_FULFILLED:
      return {
        ...state,
        loading: false,
        categories: action.payload
      };
    case ActionTypes.GET_ALCOHOLIC_LIST_PENDING:
      return {
        ...state,
        loading: true,
        alcoholics: action.payload
      };
    case ActionTypes.GET_ALCOHOLIC_LIST_FULFILLED:
      return {
        ...state,
        loading: false,
        alcoholics: action.payload
      };
    case ActionTypes.GET_INGREDIENTS_LIST_PENDING:
      return {
        ...state,
        loading: true,
        ingredients: action.payload
      };
    case ActionTypes.GET_INGREDIENTS_LIST_FULFILLED:
      return {
        ...state,
        loading: false,
        ingredients: action.payload
      };
    case ActionTypes.GET_GLASSES_LIST_PENDING:
      return {
        ...state,
        loading: true,
        glasses: action.payload
      };
    case ActionTypes.GET_GLASSES_LIST_FULFILLED:
      return {
        ...state,
        loading: false,
        glasses: action.payload
      };
    case ActionTypes.SET_CURRENT_SEARCH_TYPE:
      return {
        ...state,
        currentSearchFilter: action.payload
      };
    case ActionTypes.GET_COCKTAIL_BY_SEARCHING_PENDING:
      return {
        ...state,
        loading: true
      };
    case ActionTypes.GET_COCKTAIL_BY_SEARCHING_FULFILLED:
      return {
        ...state,
        loading: false,
        cocktails: [...action.payload]
      };
    case ActionTypes.GET_RANDOM_COCKTAIL_PENDING:
      return {
        ...state,
        loading: true
      };
    case ActionTypes.GET_RANDOM_COCKTAIL_FULFILLED:
      return {
        ...state,
        loading: false,
        randomCocktail: { ...action.payload[0] }
      };
    default:
      return state;
  }
};
