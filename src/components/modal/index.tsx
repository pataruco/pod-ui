import Slider from 'components/slider';
import React, { Component } from 'react';
import Modal from 'react-modal';
// @ts-ignore
import { connect, dispatch } from 'react-redux';
import { clearDate } from 'state/date/actions';
import { closeModal } from 'state/modal/actions';

interface Props {
  isModalOpen: boolean;
  clearDateFn?: typeof dispatch;
  hideModalFn?: () => void;
  date: string;
  files: any[];
}

export class ModalComponent extends Component<Props> {
  constructor(props) {
    super(props);
  }

  public componentWillMount() {
    Modal.setAppElement(document.getElementById('root'));
  }

  public handleClose = () => {
    this.props.clearDateFn();
    return this.props.hideModalFn();
  };

  public render() {
    const { date, files, isModalOpen } = this.props;
    return (
      <Modal
        isOpen={isModalOpen}
        onRequestClose={this.handleClose}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={this.handleClose}>close</button>
        <Slider date={date} files={files} />
      </Modal>
    );
  }
}

const hideModal = hideModalFn => () => {
  return hideModalFn();
};

export const mapDispatchToProps = {
  clearDateFn: clearDate,
  hideModalFn: hideModal(closeModal),
};

export const mapStateToProps = ({
  modal: { isModalOpen },
  date: { date, files },
}) => ({
  isModalOpen,
  date,
  files,
});

const ConnectedModal = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalComponent);

export default ConnectedModal;
