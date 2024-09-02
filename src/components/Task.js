import React from 'react';

function Task({ title }) {
  return (
    <div className="task">
      <div>{title}</div>
    </div>
  );
}

export default Task;
