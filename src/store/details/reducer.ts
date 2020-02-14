import { AnyAction } from "redux";
import { ActionsTypes } from "./types";

const initialState = {
  loading: false,
  cocktailDetails: {}
};

export default (state = initialState, { type, payload }: AnyAction) => {
  switch (type) {
    case ActionsTypes.GET_COCKTAIL_DETAILS_PENDING:
      return {
        ...state,
        loading: true
      };
    case ActionsTypes.GET_COCKTAIL_DETAILS_FULFILLED:
      return {
        ...state,
        loading: false,
        cocktailDetails: { ...payload[0] }
      };
    default:
      return state;
  }
};
