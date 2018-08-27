import React, { Component } from 'react';
import { connect } from 'dva';
@connect(({ game }) => ({ game }))
export default class Game extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'game/querygame',
    });
  }

  render() {
    return <div>0000</div>;
  }
}
