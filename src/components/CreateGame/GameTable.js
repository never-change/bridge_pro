// LSY
// 2018-8-29

import React from 'react';
import { Table, Divider, Button, Input, Popconfirm } from 'antd';
import GameForm from './GameForm';

const { Search } = Input;

const GameTable = ({ gameList, handleCreateGame, handleDeleteGame }) => {
  const activeData = { name: '', org_type: '', score_uom: '' };
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
      width: 120,

      render: record => {
        return (
          <span>
            <a to="#">
              <GameForm activeData={record}>编辑</GameForm>
            </a>
            <Divider type="vertical" />
            <Popconfirm title="确定要删除？" okText="确定" cancelText="取消">
              <a onClick={() => handleDeleteGame(record.id)} to="#">
                删除
              </a>
            </Popconfirm>
          </span>
        );
      },
    },
  ];
  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
        />
        <GameForm activeData={activeData} handleCreateGame={handleCreateGame}>
          <Button style={{ float: 'right' }} type="primary">
            创建
          </Button>
        </GameForm>
      </div>
      <Table rowKey={row => row.id} columns={columns} dataSource={gameList} />
    </div>
  );
};
export default GameTable;
