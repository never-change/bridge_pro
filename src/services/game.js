import request from '../utils/request';

export async function QueryGame() {
  return request('/api/game');
}
