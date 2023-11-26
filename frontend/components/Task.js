import React from 'react';

const Task = ({ task }) => {
  return (
    <div>
      <input type="checkbox" />
      <span>{task.text}</span>
    </div>
  );
};

export default Task;