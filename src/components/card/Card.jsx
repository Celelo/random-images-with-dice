import './card.css'
import {Dice} from "../dice/Dice.jsx"

import React from 'react';

export const Card = ({ cardHeader, cardImg, cardFooter, cardButton, diceNumber }) => {
    return (
        <div className="card">
            {cardHeader && <p className="card-title">hola soy card {diceNumber}</p>}
            <img src={cardImg} alt="Card image" className="card-img" />
            <div className="card-footer">
                {cardFooter}
                <button>{cardButton}</button>
            </div>
        </div>
    );
};
