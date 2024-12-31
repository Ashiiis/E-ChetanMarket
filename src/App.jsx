import React, { useState, useEffect } from "react";
import HomePage from "./components/shopes"; 
import "./App.css";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Timer to hide the splash screen after 3 seconds
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div>
      {showSplash ? (
        <div className="splash-screen">
          <h1>Welcome to The Mart</h1>
        </div>
      ) : (
        <HomePage /> 
      )}
    </div>
  );
};

export default App;
