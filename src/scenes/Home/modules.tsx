import { createSelector } from "reselect";
import { takeEvery, put, all } from "redux-saga/effects";
import { fetchAlbums } from "../../services/sample";
import { AlbumType } from "../../Models";
import { AnyAction } from "redux";

const moduleName = "homeModule";

export const LOAD_ALBUMS = "LOAD_ALBUMS";
export const LOAD_SUCCESS = "LOAD_SUCCESS";
export interface LoadAlbumsAction extends AnyAction {
  type: typeof LOAD_ALBUMS;
  payload: {};
}
export const loadAlbums = (): LoadAlbumsAction => ({
  type: LOAD_ALBUMS,
  payload: {},
});

export interface LoadSuccessAction extends AnyAction {
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

type Action = LoadAlbumsAction | LoadSuccessAction;

export const getState = (state: any): State =>
  state[moduleName] || initialState;

export const getAlbums = createSelector(getState, (state) => state.articles);

function reducer(state: State = initialState, action: Action) {
  switch (action.type) {
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

export const loadAlbumsSaga = takeEvery(
  LOAD_ALBUMS,
  function* ({ payload }: LoadAlbumsAction) {
    const data: any[] = yield fetchAlbums();
    yield put(loadSuccess(data));
  }
);

export function* HomeSagas() {
  yield all([loadAlbumsSaga]);
}

export default reducer;
