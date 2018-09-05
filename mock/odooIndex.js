/*
 2018-9-5 by win

 model2/method2 = from kwargs.context.mock_react_api
 model2 and method2 is dva model and method

 import {call} from './odoo_mock/' + model2

*/

function callKw(model, method, args, kwargs) {
    const { context = {} } = kwargs;
    const { mock_react_api = '' } = context;
    const [model2, method2] = mock_react_api.split('/')
    const fun = require('./odoo_mock/' + model2);
    return fun(method2, model, method, args, kwargs);
}

export function odooJsonApi(req, res) {
    const {
        params: { model, method, args, kwargs },
    } = req.body;
    const result = callKw(model, method, args, kwargs);
    res.send({ jsonrpc: 2.0, id: 1, method: 'call', result });
}