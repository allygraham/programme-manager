import React from 'react';
import PropTypes from 'prop-types';

export const Modal = ({ children, closeModal, isModalOpen }) => (
  <div className={`modal ${isModalOpen && 'is-active'}`}>
    <div
      className="modal-background"
      onClick={closeModal}
    ></div>
    <div className="modal-content">
      <div className="box">
        {children}
      </div>
    </div>
    <button
      className="modal-close is-large"
      aria-label="close"
      onClick={closeModal}
    ></button>
  </div>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
};
