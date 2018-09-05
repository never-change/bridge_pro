/*
  2018-9-5 by win

  This a demo page for dva model with odoo server.

  1 get contacts from server and list here
  2 pick one contact to view
  3 add new contact with id
  4 rename the contact viewed
  5 del one contact with id

*/


import React, { Component } from 'react';
import { connect } from 'dva';
import { Input } from 'antd';
const Search = Input.Search;

import { lookup } from '../../utils/odooUtils';


@connect(({ odoo_data, contact }) => ({ odoo_data, contact }))
export default class Bridge extends Component {
    state = {
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'contact/query',
        });
    }

    view = (value) => {
        const id = parseInt(value);

        const { dispatch } = this.props;
        dispatch({
            type: 'contact/view',
            payload: { id },
        });

    }


    add = (value) => {
        const id = parseInt(value);
        const { dispatch } = this.props;
        const res = dispatch({
            type: 'contact/add',
            payload: { id },
        });


    }

    rename = (value) => {
        const name = value;
        const { id } = this.props.contact;
        const { dispatch } = this.props;

        dispatch({
            type: 'contact/rename',
            payload: { id, name },
        });

    }

    del = (value) => {
        const id = parseInt(value);
        const { dispatch } = this.props;
        dispatch({
            type: 'contact/del',
            payload: { id },
        });

    }


    render() {
        const { ids, id } = this.props.contact;
        const partners = this.props.odoo_data.res_partner;

        //    console.log('********render*******', this.props.odoo_data )

        const contacts = lookup(ids, partners);
        const contact = lookup(id, partners);


        return <div>
            <Search
                placeholder="id to view"
                enterButton="View"
                size="large"
                onSearch={value => this.view(value)}
            />
            <Search
                placeholder="id to add"
                enterButton="Add"
                size="large"
                onSearch={value => this.add(value)}
            />
            <Search
                placeholder="new name"
                enterButton="rename"
                size="large"
                onSearch={value => this.rename(value)}
            />
            <Search
                placeholder="id to del"
                enterButton="Del"
                size="large"
                onSearch={value => this.del(value)}
            />

            <div>===List=======</div>
            <div>{JSON.stringify(contacts)}</div>

            <div>===View=======</div>
            <div>{JSON.stringify(contact)}</div>

            <div>===Ids,partner=======</div>
            <div>{JSON.stringify(ids)}</div>
            <div>{JSON.stringify(partners)}</div>



        </div>;
    }
}