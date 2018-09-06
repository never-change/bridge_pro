/*
  2018-9-5 by win

  public:
  read:  call odooRead  return data, then refresh state
  write: call odooWrite return true, then refresh state
  remove: remove data from state

  private:
  save: the step after read or write

*/

import { odooRead, odooWrite } from '../utils/odooUtils';

function dot2line(model) {
    return model.replace('.', '_');
}

export default {
    namespace: 'odoo_data',

    state: {
    },

    effects: {

        *read({ payload }, { call, put, select }) {
            /* read form odoo server then save it in here
            */
            const data = yield call(odooRead, payload);
            console.log('-------read=data--------', data)
            const { model } = payload;
            yield put({ type: 'save', payload: { [dot2line(model)]: data } });
        },

        *write({ payload }, { call, put, select }) {
            /* write to odoo server then update in here
            */
            const data = yield call(odooWrite, payload);
            if (data) {
                const { model, id, vals } = payload;
                yield put({ type: 'save', payload: { [dot2line(model)]: { [id]: vals } } });
            }
        },
    },


    reducers: {
        remove(state, { payload }) {
            const { model, id } = payload;
            const model2 = dot2line(model);
            const data = { ...state[model2] };
            delete data[id];
            return { ...state, [model2]: data };
        },

        save(state, { payload }) {
            //
            const new_state = { ...state };
            for (var model in payload) {
                const records = state[model] ? state[model] : {}
                for (var id in payload[model]) {
                    records[id] = { ...records[id], ...payload[model][id] }
                }
                new_state[model] = records;
            }
            return new_state;
        },

    },
};
