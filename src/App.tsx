import React from "react";
import {Route, Routes, BrowserRouter } from "react-router-dom";
import Task from "./pages/Task";
import Counter from './pages/Counter';
import UserProfile from "./pages/UserProfile";
import List from "./pages/List";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/task" element={<Task />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/user/:userId" element={<UserProfile />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
