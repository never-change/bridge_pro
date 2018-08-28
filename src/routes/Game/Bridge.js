
import React, { Component } from 'react';
import { connect } from 'dva';
// @connect(({bridgePlay})=>{
//     console.log(bridgePlay);
//     return ({
//          bridgePlay
//          })
// })
@connect(({ bridgePlay }) => ({ bridgePlay }))
export default class Bridge extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'bridgePlay/queryBridge',
    });
  }

  render() {
    console.log('****bridge**',this.props.bridgePlay)
    // return <div>123123</div>;
    const data = this.props.bridgePlay.payload;
    
    return <div>{JSON.stringify(data)}</div>;
  }
}


