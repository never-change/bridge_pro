const dataUser = [{ id: 1, name: 'ddddd', email: '' }];

export function userCall(method, args, kwargs) {
  switch (method) {
    case 'read2':
      return read2(args, kwargs);
    case 'searchRead2':
      return searchRead2(args, kwargs);
    default:
      break;
  }
}

function read2(args, kwargs) {
  const mock = kwargs.context.mock_react_api;
  switch (mock) {
    case 'user/queryCurrent':
      return [dataUser[0]];
    default:
      break;
  }
}
function searchRead2(args, kwargs) {
  const mock = kwargs.context.mock_react_api;
  switch (mock) {
    case 'user/queryUsers':
      return dataUser;
    default:
      break;
  }
}

export default {
  userCall,
};
