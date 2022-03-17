import React, { useState } from "react";

const ToDo = (props) => {
  const [task, setTask] = useState("");
  function handleAddTask() {
    if (task.trim() === "") {
      return;
    }
    let newTask = {
      task,
      id: Date.now(),
    };
    props.handleTask(newTask);
    setTask("");
  }
  return (
    <div>
      <input
        onChange={(e) => setTask(e.target.value)}
        type="text"
        name=""
        id=""
        placeholder="Name"
        value={task}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default ToDo;
