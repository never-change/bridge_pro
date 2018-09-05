// import { QueryGame, QueryGames} from '../services/game';



export default {
    namespace: 'odoo_data',

    state: {
        // data: {},   //写法2,3
        // testmodel: {
        //     1: { name: 'zhangsan', age: 18 },
        //     2: { name: 'lisi', age: 16 },
        //     3: { name: 'wangwu', age: 100 },
        // },
    },
    effects: {

    },

    reducers: {
        // save(state, { payload }) {
        //     console.log(payload, 'odoo partner save!')
        //     // return { ...{state}, ...payload }  ;    //写法1
        //     // return {data:{ ...{state}, ...payload } } ; //写法2
        //     return {...state, data:{ ...{state}, ...payload }  } ; //写法3
        // },

        save(state, { payload }) {
            console.log('odoo data save', payload)

            let new_model_data = {};
            for (var model in payload) {
                const data = payload[model];
                const records = state[model] ? state[model] : {}
                for (var id in data) {
                    const rec = records[id] ? records[id] : {}
                    records[id] = { ...rec, ...data[id] }
                }
                new_model_data[model] = records;
            }
            return { ...state, ...new_model_data };
        },

        edit(state, { payload }) {
            console.log(payload, 'odoo data edit!');
            const model = payload[0];
            const id = payload[1][0];
            const oldData = state[model][id];
            const newData = { ...oldData, ...payload[1][1] }
            const m = {};
            m[id] = newData;
            const t = { ...state[model], ...m };
            const z = {}
            z[model] = t;

            return {
                ...state,
                ...z,
                //...payload ,
            };
        },

    },
};