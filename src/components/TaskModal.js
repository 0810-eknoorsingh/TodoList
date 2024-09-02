import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskToBoard } from '../redux/boardSlice';

function TaskModal({ onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Todo');
  const dispatch = useDispatch();
  const activeBoardId = useSelector((state) => state.boards.activeBoardId);

  const handleSubmit = () => {
    if (title) {
      dispatch(
        addTaskToBoard({
          boardId: activeBoardId,
          task: { title, description },
          status,
        })
      );
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>New Task</h2>
        <input
          type="text"
          className="modal-input"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="modal-textarea"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          className="modal-select"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Todo">Todo</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>
        <div className="modal-buttons">
          <button className="modal-button modal-button-add" onClick={handleSubmit}>
            Add Task
          </button>
          <button className="modal-button modal-button-cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskModal;
