import React, { useState } from "react";
import "../style/Toutdoux.css";
import Toutdoux from "../components/Toutdoux";
import Navbar from "../components/Navbar";

function Task() {
  const [tasks, setTasks] = useState<{ text: string; completed: boolean }[]>(
    []
  );
  const [newTask, setNewTask] = useState<string>("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const handleToggleTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleRemoveTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <Navbar/>
      <div className="App">
        <header className="App-header">
          <div>
            <h1>TOUT DOUX LE 🐺</h1>
            <div>
              <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button type="button" onClick={handleAddTask}>
                Add
              </button>
            </div>
            <div>
              <ul>
                {tasks.map((task, index) => (
                  <Toutdoux
                    key={index}
                    task={task}
                    onToggle={() => handleToggleTask(index)}
                    onRemove={() => handleRemoveTask(index)}
                  />
                ))}
              </ul>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Task;
