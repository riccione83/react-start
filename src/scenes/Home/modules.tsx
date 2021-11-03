import { createSelector } from "reselect";
import { takeEvery, put, all } from "redux-saga/effects";
import { fetchAlbums } from "../../services/sample";
import { AlbumType } from "../../Models";

const moduleName = "homeModule";

export const ADD_TODO = "ADD_TODO";
export const LOAD_ALBUMS = "LOAD_ALBUMS";
export const LOAD_SUCCESS = "LOAD_SUCCESS";

export interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: {
    article: string;
  };
}
export const addTodo = (
  article: AddTodoAction["payload"]["article"]
): AddTodoAction => ({
  type: ADD_TODO,
  payload: {
    article,
  },
});

export interface LoadAlbumsAction {
  type: typeof LOAD_ALBUMS;
  payload: {};
}
export const loadAlbums = (): LoadAlbumsAction => ({
  type: LOAD_ALBUMS,
  payload: {},
});

export interface LoadSuccessAction {
  type: typeof LOAD_SUCCESS;
  payload: { article: any[] };
}
export const loadSuccess = (
  article: LoadSuccessAction["payload"]["article"]
): LoadSuccessAction => ({
  type: LOAD_SUCCESS,
  payload: {
    article,
  },
});

interface State {
  articles: AlbumType[];
}

const initialState = {
  articles: [],
};

type Action = AddTodoAction | LoadAlbumsAction | LoadSuccessAction;

export const getState = (state: any): State =>
  state[moduleName] || initialState;

export const getAlbums = createSelector(getState, (state) => state.articles);

function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        articles: [...state.articles, action.payload.article],
      };
    case LOAD_ALBUMS:
      return {
        ...state,
        articles: [...state.articles, action.payload],
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        articles: [...action.payload.article],
      };
    default:
      return state;
  }
}

export const saveHistorySaga = takeEvery(
  ADD_TODO,
  function* ({ payload }: AddTodoAction) {
    // const data = yield call(getData);
    yield console.log("Not implemented");
  }
);

export const loadAlbumsSaga = takeEvery(
  LOAD_ALBUMS,
  function* ({ payload }: LoadAlbumsAction) {
    const data: any[] = yield fetchAlbums();
    yield put(loadSuccess(data));
  }
);

export function* HomeSagas() {
  yield all([loadAlbumsSaga, saveHistorySaga]);
}

export default reducer;
