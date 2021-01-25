import React from "react";

const Task = ({ task, onDelete }) => {
  return (
    <li>
      <div className="task-content">{task.content}</div>
      <button onClick={() => onDelete(task.id)}>Delete Task</button>
    </li>
  );
};

export default Task;
