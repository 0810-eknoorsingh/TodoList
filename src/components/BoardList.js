import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBoard, setActiveBoard } from '../redux/boardSlice';

function BoardList() {
  const boards = useSelector((state) => state.boards.list);
  const activeBoardId = useSelector((state) => state.boards.activeBoardId);
  const dispatch = useDispatch();

  return (
    <div className="board-list">
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
        onClick={() => {
          const boardName = prompt("Enter the name of the new board:");
          if (boardName) {
            dispatch(addBoard(boardName));
          }
        }}
      >
        + Create New Board
      </button>
    </div>
  );
}

export default BoardList;
