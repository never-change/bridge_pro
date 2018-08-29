import React from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal visible={visible} title="创建比赛" okText="创建" onCancel={onCancel} onOk={onCreate}>
          <Form layout="vertical">
            <FormItem label="赛事名称">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              })(<Input />)}
            </FormItem>
            <FormItem label="赛事类型">
              {getFieldDecorator('org_type', {
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              })(<Input />)}
            </FormItem>
            <FormItem label="计分方式">
              {getFieldDecorator('score_uom', {
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
