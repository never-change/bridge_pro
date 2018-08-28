// import { QueryGame, QueryGames} from '../services/game';

export default {
  namespace: 'bridgePlay',

  state: {
    status: undefined,
  },

  effects: {
    *queryBridge({ payload }, { call, put }) {
      const pd = {id:20};
      const data = [{id:1,name:'bridge'}];
      // const data = yield call(QueryGames, payload);
    //   const data = yield call(QueryGame, pd);
      // const data = yield call(QueryGame, payload);
      console.log(data,'bbbb')
      if (data) {
        yield put({
          type: 'save',
          payload: data,
        });
      }
    },

    *next({ payload }, { call, put }) {
      const data = payload;
      if (data) {
        yield put({
          type: 'save',
          payload: data,
        });
      }
    }

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
