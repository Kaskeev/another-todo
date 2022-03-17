import React, { useState } from "react";
import EditModal from "./components/EditModal/EditModal";
import ToDo from "./components/ToDo/ToDo";
import TodoList from "./components/TodoList.jsx/TodoList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [show, setShow] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  function handleTask(newObj) {
    let newTodos = [...tasks];
    newTodos.push(newObj);
    setTasks(newTodos);
  }

  function handleTaskDelete(id) {
    let newTasksArray = tasks.filter((item) => {
      return item.id !== id;
    });
    setTasks(newTasksArray);
  }

  function handleEditTask(editedTask) {
    let newTasksArray = tasks.map((item) => {
      if (editedTask.id !== item.id) {
        return item;
      } else {
        return editedTask;
      }
    });
    setTasks(newTasksArray);
    setShow(false);
  }

  function getTaskToEdit(task) {
    setTaskToEdit(task);
    setShow(true);
  }

  return (
    <div>
      <ToDo handleTask={handleTask} />
      <TodoList
        tasks={tasks}
        handleTaskDelete={handleTaskDelete}
        getTaskToEdit={getTaskToEdit}
      />
      {taskToEdit ? (
        <EditModal
          show={show}
          setShow={setShow}
          handleEditTask={handleEditTask}
          taskToEdit={taskToEdit}
        />
      ) : null}
    </div>
  );
};

export default App;
