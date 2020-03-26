import React, { Component } from "react";
import './MemoryCard.css';

class MemoryCard extends Component {
    
    render() {
        const memoryCardInnerClass =
        'MemoryCardInner ' + (this.props.isFlipped === true && 'flipped');

      return (
        <div className="MemoryCard" onClick={this.props.pickCard}>
                <div className={memoryCardInnerClass}>
                    <div className="MemoryCardFront">
                    {this.props.symbol}
                    </div>
                    <div className="MemoryCardBack">
                        <img src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png" alt="Memory game card"/> 
                    </div>
                </div>
        </div>

      )

    }

    
}

export default MemoryCard;