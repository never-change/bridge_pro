//  LSY
//  2018-8-28

import React, { Component } from 'react';
import { connect } from 'dva';
import GameTable from '../../components/CreateGame/GameTable';
import styles from './index.less';
//  装饰器
@connect(({ creategame }) => ({ creategame }))
export default class Creategame extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'creategame/querygame',
    });
  }
  // 创建比赛 && 编辑比赛

  handleCreateGame = values => {
    const { dispatch } = this.props;
    dispatch({
      type: 'creategame/CreateGame',
      payload: values,
    });
  };
  // 删除比赛

  handleDeleteGame = id => {
    console.log(id);
  };

  render() {
    const {
      creategame: { gameList },
    } = this.props;
    return (
      <div className={styles.creategame_view}>
        <GameTable
          handleCreateGame={this.handleCreateGame}
          handleDeleteGame={this.handleDeleteGame}
          gameList={gameList}
        />
      </div>
    );
  }
}
