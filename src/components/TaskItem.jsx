import React from "react";
export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between bg-white shadow p-2 rounded-b-2xl">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id)}
          className="mr-3"
        />
        <span className={task.done ? "line-through text-gray-400" : ""}>
          {task.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700 cursor-pointer"
      >
        Delete
      </button>
    </li>
  );
}
