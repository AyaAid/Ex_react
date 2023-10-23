import React, { useState } from "react";
import "./App.scss"; 
import AppRouter from "./routes/AppRouter";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const appClass = isDarkMode ? "dark-mode" : "light-mode";

  return (
    <div className={`app ${appClass}`}>
      <AppRouter/>
      <button onClick={toggleDarkMode}>Mode Sombre</button>
    </div>
  );
}

export default App;
