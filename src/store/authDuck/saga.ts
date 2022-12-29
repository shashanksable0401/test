import {
  all,
  call,
  put,
  fork,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import {
  ACTIONS,
  authSuccessActionCall,
  authFailureActionCall,
} from "./actions";
import { actionType } from "../utils";
import { authCallApi } from "./api";
import { authReducer } from "./reducer";
import {
  AUTH_SERVICE_LOGIN_URL,
  AUTH_SERVICE_LOGOUT_URL,
} from "../../APP_CONFIG";

export function* authCallSagaAsync() {
  yield takeEvery(ACTIONS.AUTH_CALL, authCallSaga);
}

export function* authLogoutSagaAsync() {
  yield takeLatest(ACTIONS.AUTH_LOGOUT, authLogoutSaga);
}

function* authLogoutSaga(action: actionType) {
  const { payload } = action;
  //clear store
  localStorage.clear();
  const auth_service_logout_url = `${AUTH_SERVICE_LOGOUT_URL}`;
  window.location.assign(auth_service_logout_url);
}

function* authCallSaga(action: actionType) {
  const { payload } = action;
  const { queryParams, pathParams } = payload;
  const { status, statusText, data } = yield call(authCallApi, {
    queryParams,
    pathParams,
    body: null,
  });
  if (statusText === "OK" || status === 200) {
    if (payload.resolve) {
      yield payload.resolve(data);
    }
    yield put(authSuccessActionCall(data));
  } else {
    if (payload.reject) {
      yield payload.reject(data);
    }
    yield put(authFailureActionCall(data));
  }
}

/** */
export function* authCallSagaConatiner() {
  yield all([fork(authCallSagaAsync), fork(authLogoutSagaAsync)]);
}

/** Export default */
const reducers = { authReducer };
const sagas = [authCallSagaAsync, authLogoutSagaAsync];

export default {
  reducers,
  sagas,
};
