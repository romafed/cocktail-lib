import { combineReducers, Reducer, CombinedState, AnyAction } from "redux";

import searchReducer from "./search/reducer";
import detailsReducer from "./details/reducer";

import { SearchState } from "./search/types";
import { DetailsState } from "./details/types";

export interface StateType {
  searchState: SearchState;
  detailsState: DetailsState;
}

const rootReducer: Reducer<
  CombinedState<StateType>,
  AnyAction
> = combineReducers({
  searchState: searchReducer,
  detailsState: detailsReducer
});

export default rootReducer;
