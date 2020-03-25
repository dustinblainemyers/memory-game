import React, { Component } from "react";
import './MemoryCard.css';

class MemoryCard extends Component {
    render() {
        let array = []
        for (let i = 0; i < 4; i++) {
            array.push(
                <div className="MemoryCard">
                    <div className="MemoryCardInner">
                        <div className="MemoryCardBack">
                            <img src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png" alt="digitalcrafts logo" />
                        </div>
                        
                        <div className="MemoryCardFront">
                            ∆
                        </div>
                    </div>
                </div>

            )
        }
        return (
            array
        );

    }
}

export default MemoryCard;