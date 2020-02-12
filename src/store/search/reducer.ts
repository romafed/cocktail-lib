import { ActionTypes, SearchState } from "./actionsTypes";
import { AnyAction } from "redux";

const initialState: SearchState = {
  categories: [],
  ingredients: [],
  glasses: [],
  alcoholics: []
};

export default (state = initialState, action: AnyAction): SearchState => {
  switch (action.type) {
    case ActionTypes.GET_CATEGORIES_LIST_FULFILLED:
      return {
        ...state,
        categories: action.payload
      };
    case ActionTypes.GET_ALCOHOLIC_LIST_FULFILLED:
      return {
        ...state,
        alcoholics: action.payload
      };
    case ActionTypes.GET_INGREDIENTS_LIST_FULFILLED:
      return {
        ...state,
        ingredients: action.payload
      };
    case ActionTypes.GET_GLASSES_LIST_FULFILLED:
      return {
        ...state,
        glasses: action.payload
      };
    default:
      return state;
  }
};
