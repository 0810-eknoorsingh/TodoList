
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBoard } from '../redux/boardSlice';
import './NewBoardModal.css'; 

function NewBoardModal({ onClose }) {
  const [boardName, setBoardName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (boardName) {
      dispatch(addBoard(boardName));
      onClose(); 
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className='board-creation'>Create New Board</h2>
        <input
          type="text"
          className="modal-input"
          placeholder="Board Name"
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
        />
        <div className="modal-buttons">
          <button className="modal-button modal-button-add" onClick={handleSubmit}>
            Create Board
          </button>
          <button className="modal-button modal-button-cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewBoardModal;
