import { combineReducers, Reducer, CombinedState } from "redux";

import searchReducer from "./search/reducer";
import detailsReducer from "./details/reducer";

import { SearchState, SearchActionTypes } from "./search/types";

export interface StateType {
  searchState: SearchState;
  detailsState: any;
}

const rootReducer: Reducer<
  CombinedState<StateType>,
  SearchActionTypes
> = combineReducers({
  searchState: searchReducer,
  detailsState: detailsReducer
});

export default rootReducer;
