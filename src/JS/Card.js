import React from 'react'
import '../CSS/Card.css'
import Button from '../JS/Button'

export default function Card({ cardData, handleDetailsClick }) {
    return (
        <div className='card'>
            <img src={cardData.imgLink} alt={cardData.name}></img>
            <div className='cardInfo'>
                <div className='name'>{cardData.name}</div>
                <Button type='cardButton' id={cardData.id} handler={handleDetailsClick} caption={'Подробнее'}/>
                <div className='total'>
                    {cardData.currency}{cardData.price}
                </div>
            </div>
        </div>
    )
}