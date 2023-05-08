// import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalImg } from './Modal.styled';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('root-modal');

export const Modal = ({children, onClose}) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
 
  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown)
  }
}, [onClose]);

    const handleBackdropClick = e => {
      if (e.currentTarget === e.target) {
        onClose();
      }
    };
    console.log("render modalky");

    console.log(children);  
    return createPortal(
      <Backdrop onClick={handleBackdropClick}>
        <ModalImg>{children}</ModalImg>
      </Backdrop>,
      modalRoot
    );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};