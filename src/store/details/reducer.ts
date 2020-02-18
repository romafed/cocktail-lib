import { AnyAction } from "redux";
import { DetailsState, ActionsTypes } from "./types";

const initialState: DetailsState = {
  loading: false,
  ingredientForSearch: '',
  cocktailDetails: {},
  error: false
};

export default (
  state = initialState,
  { type, payload }: AnyAction
): DetailsState => {
  switch (type) {
    case ActionsTypes.GET_COCKTAIL_DETAILS_PENDING:
      return {
        ...state,
        error: false,
        loading: true
      };
    case ActionsTypes.GET_COCKTAIL_DETAILS_FULFILLED:
      if (!payload) {
        return {
          ...state,
          loading: false,
          error: true
        };
      }
      return {
        ...state,
        loading: false,
        cocktailDetails: { ...payload[0] }
      };
    case ActionsTypes.SET_INGREDIENT:
      return {
        ...state,
        ingredientForSearch: payload
      };
    default:
      return state;
  }
};
