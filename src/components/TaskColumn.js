import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

function TaskColumn({ status }) {
  const activeBoardId = useSelector((state) => state.boards.activeBoardId);
  const tasks = useSelector((state) => {
    const activeBoard = state.boards.list.find((board) => board.id === activeBoardId);
    return activeBoard ? activeBoard.tasks[status] : [];
  });

  return (
    <div className="task-column">
      <h2>{status}</h2>
      {tasks.map((task, index) => (
        <Task key={index} title={task.title} />
      ))}
    </div>
  );
}

export default TaskColumn;
