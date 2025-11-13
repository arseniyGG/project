import { useEffect } from 'react';
import logo from '../imgs/logo.png';
import Button from './Button';
import '../CSS/Header.css'
import CartElementsList from './CartElementsList';

export default function Header({ handleMenuClick, handleSearchClick, cartElements, handleDeleteCartElement }) {
    useEffect(() => {
        let search = document.getElementById('search-field');
        search.addEventListener('keydown', (event) => {
            let key = event.which || event.keyCode;
            if (key === 13) handleSearchClick();
        });
    }, []);

    function handleCartClick() {
        let btn = document.querySelector('.cart');
        let inCart = document.querySelector('.inCart');

        btn.addEventListener('click', (_) => {
            inCart.classList.add('active');
        })

        cartElements.length === 0 ? inCart.classList.remove('active') : inCart.classList.add('active');
    }

    return (
        <header>
            <img className="logo" src={logo} alt='logo'></img>
            <nav className='headerButtons'>
                <Button type='headerButton' caption={'Обувь'} handler={handleMenuClick} id={'shoes'} />
                <Button type='headerButton' caption={'Одежда'} handler={handleMenuClick} id={'clothing'} />
                <Button type='headerButton' caption={'Аксессуары'} handler={handleMenuClick} id={'accessories'} />
            </nav>
            <input type='search' id='search-field'></input>
            <Button type='headerSearch' caption={'Поиск'} handler={handleSearchClick} id='search-btn' />
            <div className='cart__wrapper'>
                <Button type='cart' handler={handleCartClick} />
                <span className='numElInCart'>{cartElements.length}</span>
                <CartElementsList type='list' cartElements={cartElements} handleDeleteCartElement={handleDeleteCartElement} />
            </div>
        </header>
    )
}