import { QueryCreateGames, CreateCreateGames } from '../services/game';

export default {
  namespace: 'creategame',

  state: {
    gameList: [],
  },

  effects: {
    *querygame({ payload }, { call, put }) {
      const data = yield call(QueryCreateGames, payload);
      if (data && data.length > 0) {
        yield put({
          type: 'save',
          gameList: data,
        });
      }
    },
    *CreateGame({ payload }, { call }) {
      yield call(CreateCreateGames, payload);
    },
  },

  reducers: {
    save(state, { gameList }) {
      // console.log(payload)
      return {
        ...state,
        gameList,
      };
    },
  },
};
