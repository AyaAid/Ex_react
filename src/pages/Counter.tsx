import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../style/Counter.css"

function Counter() {
  const [count, setCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (count === 20) {
      setShowAlert(true);
    }
  }, [count]);

  return (
    <div className="page-container">
      <Navbar />
      <div className="count">Count: {count}</div>
      <button
        className="increment-button"
        onClick={() => setCount((c) => c + 1)}
      >
        Increment
      </button>
      {showAlert && (
        <div className="alert">Tout doux le loup</div>
      )}
    </div>
  );
}

export default Counter;