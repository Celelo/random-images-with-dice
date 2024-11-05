import { Card } from "../card/Card"
import './CardContainer.css'

import {Dice} from '../dice/Dice.jsx'
import cardimg from '../../assets/hotel.jpg'
import cardimg1 from '../../assets/card1-img.jpg'
import cardimg2 from '../../assets/card2-img.jpg'
import cardimg6 from '../../assets/card6-img.jpg'


export const CardContainer = ({ diceNumber }) => {
    return (
        <div className='card-container'>
            <h2 className="card-container-title">
            El resultado es: <Dice diceNumber={diceNumber}/>
            </h2>

            {diceNumber === 1 && <Card
                cardHeader={`hola soy card 1`}
                cardImg={cardimg}
                cardFooter={' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore enim culpa quo similique in delectus aut consequuntur id. Laboriosam inventore deleniti quas obcaecati'}
                cardButton='comprar'
                diceNumber={diceNumber}
            />}
            {diceNumber === 2 && <Card
                cardHeader={`hola soy card 1`}
                cardFooter={' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore enim culpa quo similique in delectus aut consequuntur id. Laboriosam inventore deleniti quas obcaecati Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore enim culpa quo similique in delectus aut consequuntur id. Laboriosam inventore deleniti quas obcaecati'}
                cardImg={cardimg1}
                cardButton='Aceptar'
                diceNumber={diceNumber}
            />}
            {diceNumber === 3 && <Card
                cardHeader={`hola soy card 1`}
                cardImg={cardimg2}
                cardFooter={' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore enim culpa quo similique in delectus aut consequuntur id. Laboriosam inventore deleniti quas obcaecati'}
                diceNumber={diceNumber}
            />}
            {diceNumber === 4 && <Card
                cardHeader={`hola soy card 1`}
                cardImg={cardimg6}
                cardFooter={' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore enim culpa quo similique in delectus aut consequuntur id. Laboriosam inventore deleniti quas obcaecati'}
                cardButton='Apoyar causa !!'
                diceNumber={diceNumber}
            />}
            {diceNumber === 5 && <Card
                cardHeader={`hola soy card 1`}
                cardFooter={' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore enim culpa quo similique in delectus aut consequuntur id. Laboriosam inventore deleniti quas obcaecati'}
                cardButton='OK'
                diceNumber={diceNumber}
            />}
            {diceNumber === 6 && <Card
                cardHeader={`hola soy card 1`}
                cardImg={cardimg}
                cardButton='¡ Like !'
                diceNumber={diceNumber}
            />}

        </div>
    )
}