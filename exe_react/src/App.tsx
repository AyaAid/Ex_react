import React, { useState } from 'react';
import './App.css';

function App() {
  const btn = document.querySelector("button");
  const [name, setName] = useState("");
  function addtodo(name: String){
    alert(name)
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>TOUT DOUX</h1>
          <div>
            <input
              type="text"
              id="new-todo-input"
              className="input input__lg"
              name="text"
              autoComplete="off"
              value={name}
            />
            <button type="button" onClick={() => addtodo("bili")}>
              Add
            </button>
          </div>
          <div>
            <ul>
              <li>Tout doux 1</li>
              <li>Tout doux 2</li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
export default App;
