import React, { useState } from 'react';
import Countries from "./Countries"
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode" }>
      <nav>
        <div className="toggle-container">
          <button onClick={() => setDarkMode(prevMode => !prevMode)}>
            Toggle Mode
          </button>
        </div>
      </nav>
      <h1>Here is my CoronaVirus App</h1>
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
        
      <Countries />
    </div>
  );
}

export default App;
