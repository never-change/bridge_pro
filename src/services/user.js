import request from '../utils/request';
import { odooCall } from '../utils/odooUtils';


export async function query() {
  return request('/api/users');
  // const uid = JSON.parse(localStorage.userMSG).uid;
  // const mock = 'user' + '/' + queryUsers.name
  // const model = 'res.partner';
  // const method = 'search_read2';
  // const dm = [toArray('id', '=', uid)];
  // const args = [dm, ['name', 'ref', 'email']];
  // const kwargs = { limit: 1, offset: 0, order: 'id desc' };
  // return odooCall(model, method, args, kwargs, mock);
}

export async function queryCurrent() {
  const { uid } = JSON.parse(localStorage.userMSG);
  const mock = 'user/queryCurrent';
  const model = 'res.users';
  const method = 'read2';
  const args = [uid, ['name', 'ref', 'email']];
  const params = { model, method, args, kwargs: {}, mock };

  console.log('servers/user', params)

  const res = await odooCall(params);
  return res[0];
}
