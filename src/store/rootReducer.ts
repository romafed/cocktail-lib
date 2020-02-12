import { combineReducers, Reducer, CombinedState } from "redux";

import searchReducer from "./search/reducer";

import { SearchState, SearchActionTypes } from "./search/actionsTypes";

export interface StateType {
  searchState: SearchState;
}

const rootReducer: Reducer<CombinedState<StateType>, SearchActionTypes> = combineReducers({
  searchState: searchReducer
});

export default rootReducer;
