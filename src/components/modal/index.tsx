import CloseButton from 'components/icons/close-button';
import Slider from 'components/slider';
import React, { Component } from 'react';
import Modal from 'react-modal';
// @ts-ignore
import { connect, dispatch } from 'react-redux';
import { clearDate } from 'state/date/actions';
import { closeModal } from 'state/modal/actions';
import styles from './style.css';

interface Props {
  isModalOpen: boolean;
  clearDateFn?: typeof dispatch;
  hideModalFn?: typeof dispatch;
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
        className={styles.modal}
        contentLabel="Example Modal"
        isOpen={isModalOpen}
        onRequestClose={this.handleClose}
        overlayClassName={styles.overlay}
      >
        <div className={styles.buttonWrapper}>
          <button className={styles.closeButton} onClick={this.handleClose}>
            <CloseButton />
          </button>
        </div>
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
