import { odooCall } from '../utils/odooUtils';

// 这里写查询条件注意args和kwargs的写法（dome和fields），其他写法类似
export async function QueryGame(pd) {
  const mock = 'QueryGame';
  const model = 'og.igame';
  const method = 'read2';
  // const ids = id;
  const ids = pd.id;
  // const fields = ['name', 'date_game', 'game_type', 'org_type', 'match_type'];
  const fields = [
    'name',
    'date_game',
    'game_type',
    'org_type',
    'match_type',
    ['child_ids', ['name', 'game_type']],
  ];
  const args = [ids, fields];
  const params = { model, method, args, kwargs: {}, mock };
  const res = await odooCall(params);
  return res[0];
}

export async function QueryGames() {
  const mock = 'QueryGames';
  const model = 'og.igame';
  const method = 'search_read2';
  const domain = [];
  const fields = ['name', 'date_game', 'game_type', 'org_type', 'match_type'];
  const args = [domain, fields];
  const params = { model, method, args, kwargs: {}, mock };
  const res = await odooCall(params);
  return res;
}

export async function QueryCreateGames() {
  const mock = 'QueryCreateGames';
  const model = 'og.igame';
  const method = 'search_read2';
  const domain = [];
  const fields = ['name', 'date_game', 'game_type', 'org_type', 'match_type'];
  const args = [domain, fields];
  const params = { model, method, args, kwargs: {}, mock };
  const res = await odooCall(params);
  return res;
}

export async function CreateCreateGames() {
  const mock = 'CreateCreateGames';
  const model = 'og.igame';
  const method = 'search_read2';
  const domain = [];
  const fields = ['name', 'date_game', 'game_type', 'org_type', 'match_type'];
  const args = [domain, fields];
  const params = { model, method, args, kwargs: {}, mock };
  const res = await odooCall(params);
  return res;
}
