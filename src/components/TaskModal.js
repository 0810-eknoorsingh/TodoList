import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskToBoard } from '../redux/boardSlice';
import { toast } from 'react-toastify'; 
import './TaskModal.css'; 

function TaskModal({ onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Todo');
  const [errors, setErrors] = useState({ title: '', description: '' }); 
  const dispatch = useDispatch();
  const activeBoardId = useSelector((state) => state.boards.activeBoardId);

  const handleSubmit = () => {
    let hasError = false;
    const newErrors = { title: '', description: '' };

    if (!title) {
      newErrors.title = 'Please fill in the title.';
      hasError = true;
    }

    if (!description) {
      newErrors.description = 'Please fill in the description.';
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return; 
    }

    dispatch(
      addTaskToBoard({
        boardId: activeBoardId,
        task: { title, description },
        status,
      })
    );
    toast.success('Task added successfully!'); 
    onClose();
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
          onChange={(e) => {
            setTitle(e.target.value);
            setErrors({ ...errors, title: '' }); 
          }}
        />
        {errors.title && <p className="error-message">{errors.title}</p>} 
        <textarea
          className="modal-textarea"
          placeholder="Task Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            setErrors({ ...errors, description: '' }); 
          }}
        />
        {errors.description && <p className="error-message">{errors.description}</p>} 
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
          <button
            className="modal-button modal-button-add"
            onClick={handleSubmit}
          >
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
