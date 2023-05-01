import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalImg } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { children } = this.props;
    console.log("render modalky");
    console.log(this.props)
    console.log(children);  
    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <ModalImg>{children.props}</ModalImg>
      </Backdrop>,
      modalRoot
    );
  }
}