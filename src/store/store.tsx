import { createStore } from "redux";
import homeModule from "../scenes/Home/modules";
import { combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { HomeSagas } from "../scenes/Home/modules";
import { all } from "redux-saga/effects";

export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const rootReducers = combineReducers({
  homeModule,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducers,
  compose(applyMiddleware(sagaMiddleware), composeEnhancers())
);

function* rootSaga() {
  yield all([HomeSagas()]);
}
sagaMiddleware.run(rootSaga);

export default store;
