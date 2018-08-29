import React from 'react';
import { Table, Divider, Button, Input } from 'antd';
import GameForm from './GameForm';

const { Search } = Input;
const columns = [
  {
    title: '赛事名称',
    dataIndex: 'name',
  },
  {
    title: '赛事类型',
    dataIndex: 'org_type',
  },
  {
    title: '计分方式',
    dataIndex: 'score_uom',
  },
  {
    title: '操作',
    key: 'action',
    render: () => (
      <span>
        <a href="#">编辑</a>
        <Divider type="vertical" />
        <a href="#">删除</a>
      </span>
    ),
  },
];
const GameTable = ({ gameList, handleCreateGame }) => {
  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
        />
        <GameForm handleCreateGame={handleCreateGame}>
          <Button type="primary">创建</Button>
        </GameForm>
      </div>
      <Table columns={columns} dataSource={gameList} />
    </div>
  );
};
export default GameTable;
