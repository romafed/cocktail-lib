import { ActionTypes, SearchState } from "./types";
import { AnyAction } from "redux";

const initialState: SearchState = {
  loading: false,
  filters: ["Categories", "Ingredients", "Alcoholics", "Glasses"],
  categories: [],
  ingredients: [],
  glasses: [],
  alcoholics: [],
  cocktails: []
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
    case ActionTypes.GET_COCKTAIL_BY_CATEGORY_PENDING:
      return {
        ...state,
        loading: true
      };
    case ActionTypes.GET_COCKTAIL_BY_CATEGORY_FULFILLED:
      return {
        ...state,
        loading: false,
        cocktails: [...action.payload]
      };
    default:
      return state;
  }
};
