import React from 'react'
import Card from './Card'
import '../CSS/CardsGrid.css'
import { cards } from './data.js'

export default function CardsGrid() {
    return (
        <div className='cardsGrid'>{cards.map(card => {
            return <Card key={card.id} cardData={card}/>
        })}
        </div>
    )
}