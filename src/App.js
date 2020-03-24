import React from 'react';

import './App.css';
import MemoryCard from "./components/memorycard.jsx"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <h2>Match Cards To Win</h2>
        
      </header>
      <MemoryCard/>
    </div>
  );
}

export default App;
