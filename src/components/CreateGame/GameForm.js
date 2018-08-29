import React from 'react';
import CollectionCreateForm from './BasicForm';

class GameForm extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      const { handleCreateGame } = this.props;
      handleCreateGame(values);

      // this.props.handleCreateGame(values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    const { children } = this.props;
    const { visible } = this.state;
    return (
      <div style={{ display: 'inline', float: 'right' }}>
        <span type="primary" onClick={this.showModal}>
          {children}
        </span>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

// const GameForm = ({ children, handleCreateGame }) => {
//   return <CollectionsPage handleCreateGame={handleCreateGame} children={children} />;
// };

export default GameForm;
