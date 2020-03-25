import React, { Component } from "react";
import './MemoryCard.css';

class MemoryCard extends Component {
    render() {
      return (
        <div className="MemoryCard" onClick={this.clickHandler}>
                <div className="MemoryCardInner">
                    <div className="MemoryCardFront">
                        ∆
                    </div>
                    <div className="MemoryCardBack">
                        <img src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png" alt="Memory game card"/> 
                    </div>
                </div>
        </div>

      )

    }

    clickHandler() {

        alert("card clicked")
    }
}

export default MemoryCard;