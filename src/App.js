import React, {Component} from "react";
import "./App.css";
import MemoryCard from "./components/memorycard.jsx";

function generateDeck() {
  const symbols = [`∆`,` ß`, `£`, `§`,`•`, `$`, `+`, `ø`];
  const deck = [];

  for (let i = 0; i < 16;i ++ ) {
    deck.push({
      isFlipped: false,
      Symbol: symbols[i % 8]
    });
  }

  shuffle(deck);
  return deck;
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

class App extends Component {
  constructor() {
    super();
    this.state = { 
      
      deck: generateDeck(),
      pickedCards: []
    };
  }
  render() {
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
