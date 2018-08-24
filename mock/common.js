import { userCall } from './user';

function callKw(model, method, args, kwargs) {
  switch (model) {
    case 'res.users':
      return userCall(method, args, kwargs);
    default:
      break;
  }
}

export function odooJsonApi(req, res) {
  const {
    params: { model, method, args, kwargs },
  } = req.body;
  const result = callKw(model, method, args, kwargs);
  res.send({ jsonrpc: 2.0, id: 1, method: 'call', result });
}
