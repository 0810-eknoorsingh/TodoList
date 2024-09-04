import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveBoard, deleteBoard } from "../redux/boardSlice";
import CreateBoardModal from "./CreateBoardModal";
import Modal from "./Modal"; 
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import "../App.css";

function BoardList() {
  const boards = useSelector((state) => state.boards.list);
  const activeBoardId = useSelector((state) => state.boards.activeBoardId);
  const dispatch = useDispatch();
  const [showCreateBoardModal, setShowCreateBoardModal] = useState(false);
  const [showDeleteBoardModal, setShowDeleteBoardModal] = useState(false);
  const [boardToDelete, setBoardToDelete] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false); 

  const handleDeleteBoard = (boardId) => {
    setBoardToDelete(boardId);
    setShowDeleteBoardModal(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteBoard(boardToDelete));
    setShowDeleteBoardModal(false);
    setBoardToDelete(null);
    toast.error('Board has been deleted!', { 
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteBoardModal(false);
    setBoardToDelete(null);
  };

  const handleReload = () => {
    window.location.reload();
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="board-list">
      <img src="/assets/1.png" alt="Logo" className="board-list-logo" onClick={handleReload} />
      <div className="board-list-header">
        <h2 className="board-all">
          All Boards <span className="board-count">({boards.length})</span>
        </h2>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <div className={`board-items ${menuVisible ? "visible" : ""}`}>
        {boards.map((board) => (
          <div key={board.id} className="board-item">
            <button
              className={`board-button ${
                board.id === activeBoardId ? "active" : ""
              }`}
              onClick={() => dispatch(setActiveBoard(board.id))}
            >
              {board.name}
            </button>
            <button
              className="delete-board-button"
              onClick={() => handleDeleteBoard(board.id)}
            >
              ⛔
            </button>
          </div>
        ))}
        <button
          className="new-board-button"
          onClick={() => setShowCreateBoardModal(true)}
        >
          + Create New Board
        </button>
      </div>
      {showCreateBoardModal && (
        <CreateBoardModal onClose={() => setShowCreateBoardModal(false)} />
      )}
      {showDeleteBoardModal && (
        <Modal
          isOpen={showDeleteBoardModal}
          onClose={handleCloseDeleteModal}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
}

export default BoardList;
