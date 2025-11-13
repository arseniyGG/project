import CartElement from "./CartElement"
import Button from "./Button"

export default function CartElementsList({ cartElements, handleDeleteCartElement }) {
    function closeCart() {
        let btn = document.querySelector('.closeCart');
        let inCart = document.querySelector('.inCart');

        btn.addEventListener('click', (_) => {
            inCart.classList.remove('active');
        });
    }

    return (
        <>
            <div className="inCart">
                <div className="list">
                    <ul>
                        {cartElements.map((cartElement, index) => (
                            <li key={cartElement.id}>
                                <img src={cartElement.imgLinks[0]} alt="" className="cartElImg"></img>
                                <p>{cartElement.name}</p>
                                <p>{cartElement.currency}{cartElement.price}</p>
                                <CartElement id={index} handleDeleteCartElement={handleDeleteCartElement} />
                            </li>
                        ))}
                    </ul>
                </div>
                <Button type='closeCart' handler={closeCart} caption={'Закрыть корзину'} />
            </div>
        </>
    )
}