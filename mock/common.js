function callKw(model, method, args, kwargs) {
  const k = model.replace('.', '_');
  const fun = require('./odoo_mock/' + k);  //require('./res_users'),动态导入
  return fun(method, args, kwargs);
}

export function odooJsonApi(req, res) {
  const {
    params: { model, method, args, kwargs },
  } = req.body;
  const result = callKw(model, method, args, kwargs);
  res.send({ jsonrpc: 2.0, id: 1, method: 'call', result });
}
