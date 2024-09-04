
import React from "react";
import "../App.css"; 

const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Confirm Deletion</h2>
        <h3>Are you sure you want to delete this board?</h3>
        <div className="modal-buttons">
          <button className="modal-button" onClick={onConfirm}>
            Yes, Delete
          </button>
          <button className="modal-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
