import { createStore, applyMiddleware, combineReducers } from "redux";
import reducerDetails from "../reducer/detailReducers";
import otherReducers from "../reducer/otherReducers";
import serviceReducers from "../reducer/serviceReducers";

import mySaga from "../index";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ reducerDetails, otherReducers, serviceReducers });

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(mySaga);
export default store;
