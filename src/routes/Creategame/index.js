//  LSY
//  2018-8-28

import React, { Component } from 'react';
import { connect } from 'dva';
import GameTable from '../../components/CreateGame/GameTable';

//  装饰器
@connect(({ creategame }) => ({ creategame }))
export default class Creategame extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'creategame/querygame',
    });
  }
  //  创建比赛

  handleCreateGame = values => {
    const { dispatch } = this.props;
    dispatch({
      type: 'creategame/CreateGame',
      payload: values,
    });
  };

  render() {
    const {
      creategame: { gameList },
    } = this.props;
    return (
      <div>
        <GameTable handleCreateGame={this.handleCreateGame} gameList={gameList} />
      </div>
    );
  }
}
