import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import * as detailsSelectors from "../../store/details/selectors";
import * as detailsActions from "../../store/details/actions";

import { StateType } from "../../store/rootReducer";

import view from "./view";

const mapStateToProps = (state: StateType) => ({
  cocktailDetails: detailsSelectors.getCocktailDetailsSelector(state),
  loading: detailsSelectors.getLoadingSelector(state),
  error: detailsSelectors.getErrorSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ ...detailsActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(view);
