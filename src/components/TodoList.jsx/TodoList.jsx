import React from "react";

const TodoList = (props) => {
  return (
    <div>
      {props.tasks.map((item) => (
        <ul key={item.id}>
          <li>{item.task}</li>
          <button onClick={() => props.handleTaskDelete(item.id)}>
            Delete
          </button>
          <button onClick={() => props.getTaskToEdit(item)}>Edit</button>
        </ul>
      ))}
    </div>
  );
};

export default TodoList;
