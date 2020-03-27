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

  pickCard(cardIndex) {
    if (this.state.deck[cardIndex].isFlipped === true  ) {
      return 
    }
    const cardToFlip = {...this.state.deck[cardIndex]}
    cardToFlip.isFlipped = true;
    let newPickedCards = this.state.pickedCards.concat(cardIndex);
    const newDeck = this.state.deck.map( (card, index) => {
      if (cardIndex === index) {
        return cardToFlip;
      }
      return card
    });
    if (newPickedCards.length === 2) {
      const card1Index = newPickedCards[0];
      const card2Index = newPickedCards[1];
      const card1 = newDeck[card1Index];
      const card2 = newDeck[card2Index];

        if (card1.Symbol !== card2.Symbol) {
          setTimeout(() => {
            this.unFlipCards(card1Index, card2Index)
          }, 1000)

        }
      newPickedCards = [];
    }
    this.setState({deck: newDeck, pickedCards: newPickedCards});
  }

  unFlipCards = (card1Index, card2Index) => {
    const { deck } = this.state;
    const card1 = {...deck[card1Index]};
    const card2 = {...deck[card2Index]}
    card1.isFlipped = false;
    card2.isFlipped = false;
   
    const newDeck = deck.map((card, index) => {
      if (card1Index === index) {
        return card1;
      }
      if (card2Index === index) {
        return card2;
      }
      return card;
    });

    

    this.setState({
      deck: newDeck
    });

    
  }
  render() {

    const cardsJSX = this.state.deck.map( (card,index) => {
      return <MemoryCard symbol={card.Symbol} isFlipped={card.isFlipped} key={index} pickCard={this.pickCard.bind(this, index)}/>
    }
      
    );
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Memory Game</h1>
          <h2>Match Cards To Win</h2>
        </header>
        <div className='grid-container'>
          <div className='grid-row'>
            {cardsJSX.slice(0,4)}
          </div>
          <div className='grid-row'>
          {cardsJSX.slice(4,8)}
          </div>
          <div className='grid-row'>
          {cardsJSX.slice(8,12)}
          </div>
          <div className='grid-row'>
          {cardsJSX.slice(12,16)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
