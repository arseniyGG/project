import React from 'react'
import '../CSS/Card.css'
import Button from '../JS/Button'

export default function Card({ cardData }) {
    return (
        <div className='card'>
            <img src={cardData.imgLink} alt={cardData.name}></img>
            <div className='cardInfo'>
                <div className='name'>{cardData.name}</div>
                <Button type='cardButton' caption={'Подробнее'} />
                <div className='total'>
                    {cardData.currency}{cardData.price}
                </div>
            </div>
        </div>
    )
}