import React, { Component } from "react";
import './MemoryCard.css';

class MemoryCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Symbol: '',
            isFlipped: false
        }
    } 
    render() {
        const memoryCardInnerClass =
        'MemoryCardInner ' + (this.state.isFlipped === true && 'flipped');

      return (
        <div className="MemoryCard" onClick={this.clickHandler.bind(this)}>
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

    clickHandler() {

        this.setState(

            {
                isFlipped: !this.state.isFlipped
            }
        )
    }
}

export default MemoryCard;