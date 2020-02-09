import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import CloseIcon from './closeIcon';
import { blur } from './blur';
import "./index.css";

export class Dialog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    document.body.style.overflow = 'hidden';
    blur.add();
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    document.body.style.overflow = 'auto';
    blur.remove();
  }

  handleClickOutside = event => {
    const { className } = event.target;
    if (
      this.show &&
      !this.show.contains(event.target) &&
      className === 'dialog-wrapper'
    ) {
      const { onClose } = this.props;
      onClose();
    }
  };

  setWrapperRef = node => {
    this.show = node;
  };

  render() {
    const { onClose, children, closeIcon } = this.props;
    return ReactDOM.createPortal(
      <div className="dialog-wrapper">
        <div className="dialog" ref={this.setWrapperRef}>
          {closeIcon && (
            <div className="close-icon-wrapper">
              <CloseIcon className="close-icon" onClick={onClose} />
            </div>
          )}
          <div className="content">{children}</div>
        </div>
      </div>,
      document.body,
    );
  }
}

Dialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  closeIcon: PropTypes.bool,
};

Dialog.defaultProps = {
  closeIcon: true,
};
