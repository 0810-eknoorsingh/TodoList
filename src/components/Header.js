<<<<<<< HEAD

=======
// Header.js
>>>>>>> d81746dd95f55e197289aa54239f09519dfbab14

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskModal from './TaskModal';
<<<<<<< HEAD
import './Header.css';
=======
import './Header.css'; // Assuming you have a separate CSS file for Header styling
>>>>>>> d81746dd95f55e197289aa54239f09519dfbab14

function Header() {
  const [showModal, setShowModal] = useState(false);
  const activeBoardId = useSelector((state) => state.boards.activeBoardId);
  const activeBoard = useSelector((state) =>
    state.boards.list.find((board) => board.id === activeBoardId)
  );

  return (
    <div className="header">
      <div className="title">{activeBoard?.name}</div>
      <button className="add-task-button" onClick={() => setShowModal(true)}>
        + Add New Task
      </button>
      {showModal && <TaskModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

export default Header;
