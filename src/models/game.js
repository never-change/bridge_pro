import { QueryGame } from '../services/game';

export default {
  namespace: 'game',

  state: {
    status: undefined,
  },

  effects: {
    *querygame({ payload }, { call, put }) {
      const data = yield call(QueryGame, payload);
      if (data && data.length > 0) {
        yield put({
          type: 'save',
          payload: data,
        });
      }
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        payload,
      };
    },
  },
};
