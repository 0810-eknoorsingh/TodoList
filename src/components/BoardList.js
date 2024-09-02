
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveBoard } from '../redux/boardSlice';
import NewBoardModal from './NewBoardModal';

function BoardList() {
  const boards = useSelector((state) => state.boards.list);
  const activeBoardId = useSelector((state) => state.boards.activeBoardId);
  const dispatch = useDispatch();
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
        onClick={() => setIsModalOpen(true)}
      >
        + Create New Board
      </button>
      {isModalOpen && <NewBoardModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default BoardList;
