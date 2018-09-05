import request from './request';

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
  // return res;
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
  //TBD: read方法不能传context？
  kwargs = { ...kwargs, context };
  const newParams = {
    model,
    method,
    args,
    kwargs,
  };

  return jsonrpc(`/json/api?session_id=${JSON.parse(localStorage.userMSG).sid}`, newParams);
}



export function lookup(ids = [], data = {}) {
  /*  return :
   [ {id:1,name:'san',mobile: '13912345678', parent_id: [1,'HaHaGroup']},
     {id:1,name:'san',mobile: '13912345678', parent_id: [1,'HaHaGroup']} ]
  */
  return ids instanceof Array ? ids.map(id => data[id]) : data[ids]

}