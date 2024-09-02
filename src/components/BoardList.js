<<<<<<< HEAD

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveBoard } from '../redux/boardSlice';
import NewBoardModal from './NewBoardModal';
=======
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBoard, setActiveBoard } from '../redux/boardSlice';
>>>>>>> d81746dd95f55e197289aa54239f09519dfbab14

function BoardList() {
  const boards = useSelector((state) => state.boards.list);
  const activeBoardId = useSelector((state) => state.boards.activeBoardId);
  const dispatch = useDispatch();
<<<<<<< HEAD
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogoClick = () => {
    window.location.reload(); // Refresh the page
  };

  return (
    <div className="board-list">
<div>
  <img src='/assets/1.png'
  alt='Logo'
  onClick={handleLogoClick} 
  style={{ cursor: 'pointer' }}
  />
</div>

=======

  return (
    <div className="board-list">
>>>>>>> d81746dd95f55e197289aa54239f09519dfbab14
      {boards.map((board) => (
        <button
          key={board.id}
          className={`board-button ${board.id === activeBoardId ? 'active' : ''}`}
          onClick={() => dispatch(setActiveBoard(board.id))}
        >
          {board.name}
        </button>
      ))}
      <button
        className="new-board-button"
<<<<<<< HEAD
        onClick={() => setIsModalOpen(true)}
      >
        + Create New Board
      </button>
      {isModalOpen && <NewBoardModal onClose={() => setIsModalOpen(false)} />}
=======
        onClick={() => {
          const boardName = prompt("Enter the name of the new board:");
          if (boardName) {
            dispatch(addBoard(boardName));
          }
        }}
      >
        + Create New Board
      </button>
>>>>>>> d81746dd95f55e197289aa54239f09519dfbab14
    </div>
  );
}

export default BoardList;
