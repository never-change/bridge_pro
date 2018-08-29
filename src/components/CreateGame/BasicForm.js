// LSY
// 2018-8-29

import React from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(
  class extends React.Component {
    render() {
      const {
        visible,
        onCancel,
        onCreate,
        form,
        activeData: { name: gameName, org_type: orgType, score_uom: scoreUom },
      } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal visible={visible} title="创建比赛" okText="创建" onCancel={onCancel} onOk={onCreate}>
          <Form layout="vertical">
            <FormItem label="赛事名称">
              {getFieldDecorator('name', {
                initialValue: gameName,
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              })(<Input />)}
            </FormItem>
            <FormItem label="赛事类型">
              {getFieldDecorator('org_type', {
                initialValue: orgType,
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              })(<Input />)}
            </FormItem>
            <FormItem label="计分方式">
              {getFieldDecorator('score_uom', {
                initialValue: scoreUom,
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              })(<Input />)}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);

export default CollectionCreateForm;
