import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import './TaskColumn.css'; 

function TaskColumn({ status }) {
  const activeBoardId = useSelector((state) => state.boards.activeBoardId);
  const tasks = useSelector((state) => {
    const activeBoard = state.boards.list.find((board) => board.id === activeBoardId);
    return activeBoard ? activeBoard.tasks[status] : [];
  });

  return (
    <div className="task-column">
      <h3>{status} ({tasks.length})</h3>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          status={status}
          boardId={activeBoardId}
        />
      ))}
    </div>
  );
}

export default TaskColumn;
