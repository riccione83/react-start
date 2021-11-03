import { takeEvery, all } from "redux-saga/effects";
import { createSelector } from "reselect";

const moduleName = "loginModule";

export const LOGIN = "LOGIN";
export const LOGIN_ERROR = "LOGIN_ERROR";

export interface LoginAction {
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

interface State {
  loading: boolean;
  userId?: string;
}

const initialState = {
  loading: false,
  userId: undefined,
};

type Action = LoginAction;

export const getState = (state: any): State =>
  state[moduleName] || initialState;

export const getUserId = createSelector(getState, (state) => state.userId);

function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
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
