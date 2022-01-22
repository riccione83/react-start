import { AnyAction } from "redux";
import { takeEvery, all } from "redux-saga/effects";
import { createSelector } from "reselect";

const moduleName = "loginModule";

export const LOGIN = "LOGIN";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

export interface LoginAction extends AnyAction {
  type: typeof LOGIN;
  payload: {
    userName: string;
    password: string;
  };
}
export const login = (
  userName: LoginAction["payload"]["userName"],
  password: LoginAction["payload"]["password"]
): LoginAction => ({
  type: LOGIN,
  payload: {
    userName,
    password,
  },
});

interface LoginSuccessAction extends AnyAction {
  type: typeof LOGIN_SUCCESS;
  payload: {
    userName: string;
  };
}

export const loginSuccess = (
  userName: LoginSuccessAction["payload"]["userName"]
): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload: {
    userName,
  },
});

interface LogoutAction extends AnyAction {
  type: typeof LOGOUT;
  payload: {};
}

export const logout = () => ({
  type: LOGOUT,
  payload: {},
});

interface State {
  loading: boolean;
  userId?: string;
}

const initialState = {
  loading: false,
  userId: undefined,
};

type Action = LoginAction | LoginSuccessAction | LogoutAction;

export const getState = (state: any): State =>
  state[moduleName] || initialState;

export const getUserId = createSelector(getState, (state) => state.userId);

function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT:
      return {
        ...state,
        userId: undefined,
        loading: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        userId: action.payload.userName,
        loading: false,
      };
    default:
      return state;
  }
}

export const loginSaga = takeEvery(LOGIN, function* ({ payload }: LoginAction) {
  yield console.info("Login Not implemented", payload.userName);
});

export function* LoginSagas() {
  yield all([loginSaga]);
}

export default reducer;
