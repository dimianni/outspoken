import React from 'react';
import './QuoteCard.css';


const QuoteCard = ({ imgPath, by }) => {
    return (

        <div className="quoteCard">
            <img src={`../images/${imgPath}.jpg`} className="cardImg" alt={by} />
            <div className="hover">
                <div className="hoverName">{by}</div>
            </div>
        </div>

    );
}

export default QuoteCard;