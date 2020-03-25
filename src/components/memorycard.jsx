import React, { Component } from "react";
import './MemoryCard.css';

class MemoryCard extends Component {
    constructor() {
        super();
        this.state = {isFlipped:false }

    }
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

        this.setState(

            {
                isFlipped: !this.state.isFlipped
            }
        )
    }
}

export default MemoryCard;