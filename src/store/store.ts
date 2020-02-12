import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import logger from "redux-logger";

import rootReducer from "./rootReducer";

const middleware = [thunk, promise, logger];

const store = createStore(rootReducer, {}, applyMiddleware(...middleware));

export default store;
