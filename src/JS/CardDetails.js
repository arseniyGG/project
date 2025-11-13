import '../CSS/CardDetails.css'
import Button from './Button'
import Carousel from './Carousel'

export default function CardDetails({ card, handleAddElementToCart }) {
    return (
        <>
            <div className='details'>
                <section className='carouselBlock'>
                    <Carousel slides={card.imgLinks} />
                </section>
                <section className='other'>
                    <h1>{card.name}</h1>
                    <span className='total'>{card.currency}{card.price}</span>
                    <div className='buttons'>
                        <Button type='like'>&#x2764;</Button>
                        <Button type='addToCart' handler={() => handleAddElementToCart(card)} caption={'Добавить в корзину'} />
                    </div>
                    <h3>Description</h3>
                    <p>{card.description}</p>
                    <h3>Features & Benefits</h3>
                    <div className='featuresBenefits'>
                        <ul>
                            {card.featuresBenefits.map((featureBenefit, index) => (
                                <li key={index}>{featureBenefit}</li>
                            ))}
                        </ul>
                    </div>
                    <h3>Details</h3>
                    <div className='unimportantDetails'>
                        <ul>
                            {card.unimportantDetails.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                    <h3>Materials & Care</h3>
                    <div className='materialsCare'>
                        <ul>
                            {card.materialsCare.map((material, index) => (
                                <li key={index}>{material}</li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </>
    )
}