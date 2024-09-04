import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask, deleteTask } from "../redux/boardSlice";
import { toast } from "react-toastify";
import DeleteTask from "./DeleteTask";

function Task({ id, title, description, status, boardId }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editDescription, setEditDescription] = useState(description);
  const [editStatus, setEditStatus] = useState(status);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(
      editTask({
        boardId,
        taskId: id,
        updatedTask: { title: editTitle, description: editDescription, status: editStatus },
      })
    );
    setIsEditing(false);
  };

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    dispatch(deleteTask({ boardId, taskId: id }));
    toast.error("Task deleted!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setShowDeleteModal(false);
  };

  return (
    <div className="task">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="task-input"
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            className="task-textarea"
          />
          <select
            value={editStatus}
            onChange={(e) => setEditStatus(e.target.value)}
            className="task-select"
          >
            <option value="Todo">Todo</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
          <div className="task-buttons">
            <button className="task-button" onClick={handleEdit}>
              Save
            </button>
            <button className="task-button" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <b>
            <div style={{fontSize: "25px"}}>{title}</div>
          </b>

          <br />
          <div>{description}</div>
          <br />
          <div className="task-buttons">
            <button className="task-button" onClick={() => setIsEditing(true)}>
              ✏️
            </button>
            <button className="task-button" onClick={handleDelete}>
              🗑️
            </button>
          </div>
        </>
      )}

      <DeleteTask
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
}

export default Task;
