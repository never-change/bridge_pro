import { QueryGame } from '../services/game';

export default {
  namespace: 'game',

  state: {
    status: undefined,
  },

  effects: {
    *querygame({ payload }, { call, put }) {
      const pd = { id: 20 };
      // const data = yield call(QueryGames, payload);
      const data = yield call(QueryGame, pd, payload);
      // const data = yield call(QueryGame, payload);
      if (data) {
        yield put({
          type: 'save',
          payload: data,
        });
      }
    },
  },

  reducers: {
    save(state, { payload }) {
      // console.log(payload)
      return {
        ...state,
        payload,
      };
    },
  },
};
