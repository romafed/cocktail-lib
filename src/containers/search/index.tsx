import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import * as searchSelectors from "../../store/search/selectors";
import * as searchActions from "../../store/search/actions";

import { StateType } from "../../store/rootReducer";

import view from "./view";

const mapStateToProps = (state: StateType) => ({
  loading: searchSelectors.getLoadingSelector(state),
  filters: searchSelectors.getFiltersSelector(state),
  categories: searchSelectors.getCategoriesSelector(state),
  ingredients: searchSelectors.getIngredientsSelector(state),
  glasses: searchSelectors.getGlassesSelector(state),
  alcoholics: searchSelectors.getAlcoholicSelector(state),
  cocktails: searchSelectors.getCocktailsSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ ...searchActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(view);
