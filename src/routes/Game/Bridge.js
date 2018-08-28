
import React, { Component } from 'react';
import { connect } from 'dva';
import { Button, Input } from 'antd';
const Search = Input.Search;
// @connect(({bridgePlay})=>{
//     console.log(bridgePlay);
//     return ({
//          bridgePlay
//          })
// })
@connect(({ bridgePlay }) => ({ bridgePlay }))
export default class Bridge extends Component {
  state = {
    name: null,
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'bridgePlay/queryBridge',
    });
  }

  click = (value) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'bridgePlay/next',
      payload: { val: value },
    });
  }

  render() {
    console.log('****bridge**', this.props.bridgePlay)
    const data = this.props.bridgePlay.payload;

    return <div>
      <Search
        placeholder="input search text"
        enterButton="TEST"
        size="large"
        onSearch={value => this.click(value)}
      />
      <div>{JSON.stringify(data)}</div>
    </div>;
  }
}


