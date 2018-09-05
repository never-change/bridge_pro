const dataUser = [{ id: 1, name: 'ddddd', email: '' }];

function userCall(method2, model, method, args, kwargs) {
  const fn = eval(method2);
  return fn(model, method, args, kwargs);
}

function queryCurrent(model, method, args, kwargs) {
  return [dataUser[0]];
}

function queryUsers(args, kwargs) {
  return dataUser;
}

module.exports = userCall;