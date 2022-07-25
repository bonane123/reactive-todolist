import React, { useState } from "react";
function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    const newToDoList = [...toDoList, newTask];
    setToDoList(newToDoList);
    setNewTask("");
  };
  return (
    <div className="App">
      <form onSubmit={addTask}>
        <input
          type="text"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        />
        <button type="submit">Add Task</button>
      </form>
      {toDoList.map((task) => {
        return <h1>{task}</h1>;
      })}
    </div>
  );
}

export default App;
