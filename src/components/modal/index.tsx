import React, { Component } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';

interface Props {
  isModalOpen: boolean;
}

export class ModalComponent extends Component<Props> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
      <Modal
        isOpen={this.props.isModalOpen}
        // onAfterOpen={this.afterOpenModal}
        // onRequestClose={this.closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <h1>Hola</h1>
      </Modal>
    );
  }
}

export const mapStateToProps = ({ modal: { isModalOpen } }) => ({
  isModalOpen,
});

const ConnectedModal = connect(mapStateToProps)(ModalComponent);

export default ConnectedModal;
