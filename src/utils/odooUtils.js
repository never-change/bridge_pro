import request from './request';

export function jsonrpc(url, body) {
  const params = {
    jsonrpc: 2.0,
    id: 1,
    method: 'call',
    params: body,
  };
  return request(url, {
    method: 'POST',
    body: params,
  });
}

export async function odooLogin(params) {
  const newParams = {
    ...params,
    db: 'TT',
  };
  return jsonrpc('/json/user/login', newParams);
}

export function toArray(a, b, c) {
  return [a, b, c];
}

export function odooResponse(response) {
  // TBD: response.error!!!!
  return response.result;
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
