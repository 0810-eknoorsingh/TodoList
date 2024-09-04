import React from "react";
import "./DeleteTask.css";

function DeleteTask({ show, onClose, onConfirm }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Are you sure you want to delete this task?</h3>
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
}

export default DeleteTask;
