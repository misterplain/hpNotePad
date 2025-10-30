import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

import { dashboardReducer } from "./reducers/dashboardReducers";

const reducer = combineReducers({
  dashboard: dashboardReducer,
});

const initialState = {};

const middleware = [thunk];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
