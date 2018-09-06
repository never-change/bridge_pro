export function odooJsonUserLogin(req, res) {
  const {
    params: { password, login, type },
  } = req.body;
  if (password === '888888' && login === 'admin') {
    res.send({
      jsonrpc: 2.0,
      id: 1,
      method: 'call',
      result: {
        sid: 'qeqeqw',
        name: 'ss',
        uid: 1,
        status: 'ok',
        type,
        currentAuthority: 'admin',
      },
    });
    return;
  }

  if (password === '123456' && login === 'user') {
    res.send({
      status: 'ok',
      type,
      currentAuthority: 'user',
    });
    return;
  }
  res.send({
    status: 'error',
    type,
    currentAuthority: 'guest',
  });
}

export default {
  odooJsonUserLogin,
};
