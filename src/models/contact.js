/*
    2018-9-5 by win

    This is template for dva model with odoo server.

    Can define any *method which type of:

    Type 1, new:
      Call odooCreate or odooSearch return id or ids,
      then update state by set ids
      then call odoo_data/read, to refresh odoo_data

    Type 2, remove:
      Call odooUnlink return true or false, when true:
      then update state by remove id from ids.
      then call odoo_data/remove, to remove data of odoo_data

    Type 3, update:
      Call odoo_data/write, to update data of odoo_data

*/

import { odooCreate, odooSearch, odooUnlink } from '../utils/odooUtils';


export default {
    namespace: 'contact',
    state: {
        ids: [],
        id: 0
    },

    effects: {
        *query({ payload }, { call, put, select }) {
            const data = yield call(odooSearch, { model: 'res.partner', domain: [], fields: [], mock: 'contact/search' });

            if (data) {
                yield put({ type: 'odoo_data/read', payload: { model: 'res.partner', id: data, mock: 'contact/searchRead' } });
                yield put({ type: 'save', payload: { ids: data } });
            }
        },

        *add({ payload }, { call, put, select }) {
            const data = yield call(odooCreate, { model: 'res.partner', vals: payload, mock: 'contact/create' });

            if (data) {
                yield put({ type: 'odoo_data/read', payload: { model: 'res.partner', id: data, mock: 'contact/read' } });
                yield put({ type: 'insert', payload: { id: data } });
            }
        },

        *rename({ payload }, { call, put, select }) {
            const { id, name } = payload;
            yield put({ type: 'odoo_data/write', payload: { model: 'res.partner', id, vals: { name }, mock: 'contact/rename' } });
        },

        *del({ payload }, { call, put, select }) {
            const { id } = payload;
            const data = yield call(odooUnlink, { model: 'res.partner', id, mock: 'contact/del' });
            if (data) {
                const { id } = payload;
                const res_partner = { [id]: { id, name } }
                yield put({ type: 'odoo_data/remove', payload: { model: 'res.partner', id } });
                yield put({ type: 'remove', payload: { id } });

            }
        },
    },

    reducers: {
        view(state, { payload }) {
            return { ...state, ...payload, };
        },

        insert(state, { payload }) {
            const { ids } = state;
            const { id } = payload;
            return { ...state, ids: [id, ...ids], id };
        },

        remove(state, { payload }) {
            const { ids } = state;
            const { id } = payload;

            const index = ids.findIndex(item => item == id)
            if (index >= 0) { ids.splice(index, 1) }

            return { ...state, ids, id: 0 };
        },

        save(state, { payload }) {
            return { ...state, ...payload, };
        },
    },

};