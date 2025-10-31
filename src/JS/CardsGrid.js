import React from 'react'
import Card from './Card'
import '../CSS/CardsGrid.css'

export default function CardsGrid({ cards }) {
    return (
        <div className='cardsGrid'>{cards.map(card => {
            return <Card key={card.id} cardData={card} />
        })}
        </div>
    )
}