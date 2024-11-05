import { Dice } from '../dice/Dice.jsx';
import './Rollbutton.css'

export const Rollbutton = ({ diceNumber, rollDice }) => {
    return (
        <>
            <button className='roll-button' onClick={rollDice}>
                <Dice diceNumber={diceNumber} />
                Roll
            </button>
        </>
    )
}