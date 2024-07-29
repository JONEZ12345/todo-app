import React from "react";

function TodoItem({ todo, index, onToggle, onDelete }) {
  return (
    <li className="todo">
      <input
        type="checkbox"
        id={`todo-${index}`}
        checked={todo.completed}
        onChange={() => onToggle(index)}
      />
      <label className="custom-checkbox" htmlFor={`todo-${index}`}>
        <svg
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
        </svg>
      </label>
      <label htmlFor={`todo-${index}`} className="todo-text">
        {todo.text}
      </label>
      <button className="delete-button" onClick={() => onDelete(index)}>
        <svg
          fill="var(--secondary-color)"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
        </svg>
      </button>
    </li>
  );
}

export default TodoItem;
