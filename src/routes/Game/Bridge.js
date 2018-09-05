
import React, { Component } from 'react';
import { connect } from 'dva';
import { Button, Input, Divider } from 'antd';
import { lookup } from '../../utils/odooUtils';
const Search = Input.Search;
// @connect(({bridgePlay})=>{
//     console.log(bridgePlay);
//     return ({
//          bridgePlay
//          })
// })
@connect(({ bridgePlay, odoo_data }) => ({ bridgePlay, odoo_data }))
export default class Bridge extends Component {
  state = {
    name: null,
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'bridgePlay/queryBridge',
      //payload:这个是传入的参数，没有写就是undefined
      payload: 123
    });
  }

  add = (value) => {
    console.log('value', value)
    const data = {name: 'wuming'+value, age: value};
    const { dispatch } = this.props;
    dispatch({
      type: 'bridgePlay/add',
      payload: data ,
    });
  }
  unlink = (value) => {
    console.log('value', value)
    const { dispatch } = this.props;
    dispatch({
      type: 'bridgePlay/unlink',
      payload:  value ,
    });
  }
  edit = (value) => {
    console.log('editvalue----------', value.split(','))
    const { dispatch } = this.props;
    const data = [value.split(',')[0],{name:value.split(',')[1]}];
    dispatch({
      type: 'bridgePlay/edit',
      payload: data,
    });
  }

  render() {

    // console.log(lookup)

    console.log('****bridgeMODEL**', this.props.bridgePlay.ids);
    console.log('****odoo_dataMODEL**', this.props.odoo_data.testmodel);

    const ids = this.props.bridgePlay.ids;
    const data = this.props.odoo_data.testmodel;
    const tableData = lookup(ids, data);
    console.log(tableData)
    // const data = this.props.bridgePlay.payload;

    return <div>
      <Search
        placeholder="input add text"
        enterButton="ADD"
        size="large"
        onSearch={value => this.add(value)}
      />
      <Divider />
      <Search
        placeholder="input unlink text"
        enterButton="UNLINK"
        size="large"
        onSearch={value => this.unlink(value)}
      />
      <Divider />
      <Search
        placeholder="input edit text"
        enterButton="EDIT"
        size="large"
        onSearch={value => this.edit(value)}
      />
      <h1>ok</h1>
      <div>{JSON.stringify(ids)}</div>
      <div>==========</div>
      <div>{JSON.stringify(data)}</div>
      <div>==========</div>
      <div>{JSON.stringify(tableData)}</div>
    </div>;
  }
}


