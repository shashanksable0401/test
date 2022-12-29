import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { all, spawn, call } from "redux-saga/effects";
import { duckType } from "./utils";

import authDuck from "./authDuck/saga";

let registeredReducers: any = {};
let registeredSagas: any[] = [];

const registerDuck = (duck: duckType) => {
  registeredReducers = { ...registeredReducers, ...duck.reducers };
  registeredSagas = registeredSagas.concat(duck.sagas);
};
/**
 * Register application duck using registerDuck function
 */
registerDuck(authDuck);

const rootReducer = combineReducers(registeredReducers);
const rootSaga = function* () {
  yield all(
    registeredSagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      }),
    ),
  );
};

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
      : (f: any) => f,
  ),
);

sagaMiddleware.run(rootSaga);
