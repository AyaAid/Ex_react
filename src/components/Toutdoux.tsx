import React from "react";

interface ToutdouxProps {
  task: { text: string; completed: boolean };
  onToggle: () => void;
  onRemove: () => void;
}

const Toutdoux: React.FC<ToutdouxProps> = ({ task, onToggle, onRemove }) => {
  return (
    <li className={task.completed ? "completed" : ""}>
      <input type="checkbox" checked={task.completed} onChange={onToggle} />
      {task.text}
      <button onClick={onRemove}>Delete</button>
    </li>
  );
};

export default Toutdoux;
