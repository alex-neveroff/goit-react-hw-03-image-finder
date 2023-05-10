import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalWindow, Overlay } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleOverlayClick}>
        <ModalWindow>{this.props.children}</ModalWindow>
      </Overlay>
    );
  }
}

Modal.propTypes = { onClose: PropTypes.func.isRequired };

export default Modal;
