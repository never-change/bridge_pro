// import { QueryGame, QueryGames} from '../services/game';

export default {
  namespace: 'bridgePlay',

  state: {
    status: undefined,
    ids: [],
  },

  effects: {
    *queryBridge({ payload }, { call, put }) {
      // const pd = { id: 20 };
      //   const dictionary = yield call(QueryGame, pd);
      
      //ids和dictionary应该是server后台取值

      // const ids = yield call(QueryGames, payload);
      const ids = [1, 2, 3];
      if (ids) {
      // const dictionary = yield call(QueryGames, payload);
        const dictionary = {
          1: { name: 'zhangsan', age: 18 },
          2: { name: 'lisi', age: 16 },
          3: { name: 'wangwu', age: 21 },
        };
        yield put({
          type: 'save',
          payload: { ids },  //写法1
          // payload: ids,   //写法2
        });

        yield put({
          type: 'odoo_data/save',
          // payload: dictionary,
          payload: { testmodel: dictionary, t2: dictionary },
        });
      };



    },

    *unlink({ payload }, { call, put }) {
      //payload 是页面传来的id
      // const val = payload;
      const val = parseInt(payload);
      if (val) {
        //应该往后台传值
        // const res = yield call(UnlinkGames, payload);
        const res = 1;
        if (res == 1) {
          yield put({
            type: 'del',
            payload: val,
          });
        }
      }
    },

    *add({ payload }, { call, put }) {
      console.log(payload.age, 'age-----------');
      // //应该往后台传值，写入成功后返回id
      // const res = yield call(AddGames, payload);
      const res = parseInt(payload.age);
      if (res) {
        yield put({
          type: 'addIds',
          payload: res,  //写法1
        });
        // const new_data = yield call(QueryGame, this.state.ids);
        const new_data = {};
        new_data[res] = payload;

        yield put({
          type: 'odoo_data/save',
          payload: { testmodel: new_data },
        });

      };
    },


    *edit({ payload }, { call, put }) {
      // const val = payload;
      //把数据提交服务器进行编辑
      // const res = yield call(EditGame,payload);
      const res = true;
      if (res) {
        //应该往后台传值
        yield put({
          type: 'odoo_data/edit',
          payload: ['testmodel',payload],
        });
      }
    }

  },

  reducers: {

    save(state, { payload }) {
      // console.log(payload)
      return {
        ...state,
        ...payload,   //写法1
        // ids:payload, //写法2
      };
    },


    del(state, { payload }) {
      const id = payload;
      console.log(id, 'dddddddddddd')
      state.ids.indexOf(id) >= 0 ? state.ids.splice(state.ids.indexOf(id), 1) : null
      console.log(state, '**************************')
      return {
        ...state,
      };
    },

    addIds(state, { payload }) {
      state.ids.push(payload);
      return {
        ...state,
      };
    },

    // save(state, { payload }) {
    //   // console.log(payload)
    //   return {
    //     ...state,
    //     payload,
    //   };
    // },
  },
};
