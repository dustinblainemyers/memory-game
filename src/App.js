import React from "react";

import "./App.css";
import MemoryCard from "./components/memorycard.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = { isFlipped: false };
  }
  App() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Memory Game</h1>
          <h2>Match Cards To Win</h2>
        </header>
        <div className='grid-container'>
          <div className='grid-row'>
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
          </div>
          <div className='grid-row'>
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
          </div>
          <div className='grid-row'>
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
          </div>
          <div className='grid-row'>
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
