/* eslint-disable import/no-anonymous-default-export */
import { createStore, Reducer } from "redux";
import homeModule from "../scenes/Home/modules";
import loginModule from "../scenes/Login/modules";
import { combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { HomeSagas } from "../scenes/Home/modules";
import { all } from "redux-saga/effects";
import { LoginSagas } from "../scenes/Login/modules";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["homeModule"],
};

export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const rootReducers = combineReducers({
  homeModule,
  loginModule,
});

const persistedReducer = persistReducer(persistConfig, rootReducers as Reducer);

export default () => {
  const sagaMiddleware = createSagaMiddleware();

  let store = createStore(
    persistedReducer,
    compose(applyMiddleware(sagaMiddleware), composeEnhancers())
  );
  let persistor = persistStore(store);

  function* rootSaga() {
    yield all([HomeSagas(), LoginSagas()]);
  }
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
};
