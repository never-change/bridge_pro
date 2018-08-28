import { put, call } from 'redux-saga/effects';
import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'dva';
import * as login from '../../models/login';

const loginTest = login.default.effects.login({}, { call, put });

// console.log('******************************************************************登录测试（login）')
const loginTestO1 = loginTest.next().value;
const loginTestSuccess = loginTestO1.CALL.fn({
  userName: 'admin',
  password: '888888',
  type: 'account',
});
const loginTestError = loginTestO1.CALL.fn({ userName: 'admin', password: '888', type: 'account' });
// loginTestSuccess.then((v1) => { console.log('loginTestSuccess:', v1.status) });
// loginTestError.then((v1) => { console.log('loginTestError:', v1.status) });
loginTestSuccess.then(v1 => {
  if (v1.status === 'ok') {
    console.log('密码正确验证正确******成功');
  } else {
    console.error('密码验证正确********错误');
  }
});
loginTestError.then(v1 => {
  if (v1.status === 'error') {
    console.log('密码错误验证********成功');
  } else {
    console.error('错误密码验证********错误 ');
  }
});
// console.log('******************************************************************保存测试（changeLoginStatus）')
const payload = { status: 'ok', type: 'account', currentAuthority: 'admin' };
const changeLoginStatus = loginTest.next(payload).value.PUT.action;
// console.log(changeLoginStatus);
if (changeLoginStatus.type === 'changeLoginStatus' && changeLoginStatus.payload === payload) {
  console.log('changeLoginStatus保存验证*****正确');
} else {
  console.log('changeLoginStatus验证*****错误');
}

//  **********************************************************************************跳转页面CALL_HISTORY_METHOD"
const routerRedux = loginTest.next();
if (routerRedux.done) {
  console.error('密码正确跳转验证*******错误');
} else if (routerRedux.value.PUT.action.payload.args[0] === '/') {
  console.log('密码正确跳转验证*****正确');
} else {
  console.error('密码正确跳转验证****错误');
}
// —————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————— */

// ××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××登出测试（logout）
const logoutTest = login.default.effects.logout({}, { put });
logoutTest.next();
// ×××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××××登出跳转验证
const logoutRouter = logoutTest.next();
if (logoutRouter.value.PUT.action.payload.args[0].pathname === '/user/login') {
  console.log('登出跳转验证*****正确');
} else {
  console.error('登出跳转验证****错误');
}
// ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

@connect(state => ({
  login: state.login,
}))
export default class LoginTest extends Component {
  onClickLoginTest = () => {
    const { dispatch } = this.props;

    dispatch({
      type: 'logintest/login',
      payload: { ...loginTest },
    });
  };

  render() {
    return (
      <div>
        <div>
          <Button onClick={this.onClickLoginTest}>登录测试</Button>
        </div>
      </div>
    );
  }
}
