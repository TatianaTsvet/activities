import { createStore, applyMiddleware, combineReducers } from "redux";
import detailReducers from "../reducer/detailReducers";
import mainReducers from "../reducer/mainReducers";
import serviceReducers from "../reducer/serviceReducers";

import mySaga from "../index";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  detailReducers,
  mainReducers,
  serviceReducers,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(mySaga);
export default store;
