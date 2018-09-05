/*
  new method :
    lookup
    odooRead, odooWrite, odooCreate, odooSearch,odooUnlnik
  2018-9-5 by win
*/


import request from './request';

export function lookup(ids = [], data = {}) {
  return Array.isArray(ids) ? ids.map(id => data[id]) : data[ids] ? data[ids] : {}
}

export async function jsonrpc(url, body) {
  const params = {
    jsonrpc: 2.0,
    id: 1,
    method: 'call',
    params: body,
  };
  const res = await request(url, {
    method: 'POST',
    body: params,
  });
  // TBD: response.error!!!!
  console.log(res.result);
  return res.result;
}

export function odooLogin(params) {
  // export async function odooLogin(params) {
  const newParams = {
    ...params,
    db: 'TT',
  };
  return jsonrpc('/json/user/login', newParams);
}

export function toArray(a, b, c) {
  return [a, b, c];
}

export function odooCall(params) {
  // const {model, method, args=[], kwargs={}, mock=""} = params;
  const { model } = params;
  const { method } = params;
  const args = params.args || [];
  let kwargs = params.kwargs || { context: {} };
  const mock = params.mock || '';
  let { context } = kwargs;
  context = { ...context, mock_react_api: mock };
  kwargs = { ...kwargs, context };
  const newParams = {
    model,
    method,
    args,
    kwargs,
  };
  return jsonrpc(`/json/api?session_id=${JSON.parse(localStorage.userMSG).sid}`, newParams);
}

export async function odooWrite(payload) {
  const { model, id, vals, mock = '' } = payload;
  const method = 'write';

  const args = [id, vals];
  const payload2 = { model, method, args, kwargs: {}, mock };
  const res = await odooCall(payload2);
  return res;
}

export async function odooUnlink(payload) {
  const { model, id, mock = '' } = payload;
  const method = 'unlink';

  const args = [id];
  const payload2 = { model, method, args, kwargs: {}, mock };
  const res = await odooCall(payload2);
  return res;
}


export async function odooCreate(payload) {
  const { model, vals, mock = '' } = payload;
  const method = 'create';

  const args = [vals];
  const payload2 = { model, method, args, kwargs: {}, mock };
  const res = await odooCall(payload2);
  return res;
}

export async function odooRead(payload) {
  const { model, id, fields = [], mock = '' } = payload;
  const method = 'read';

  const args = [id, fields];
  const payload2 = { model, method, args, kwargs: {}, mock };
  const res = await odooCall(payload2);
  return res;
}

export async function odooSearch(payload) {
  const { model, domain = [], fields = [], mock = '' } = payload;
  const method = 'search';

  const args = [domain, fields];
  const payload2 = { model, method, args, kwargs: {}, mock };
  const res = await odooCall(payload2);
  return res;
}