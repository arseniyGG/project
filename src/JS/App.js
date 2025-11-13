import { useState } from 'react';
import Header from './Header';
import CardsGrid from './CardsGrid';
import { findDataStrict, findDataByName } from './data.js'
import CardDetails from './CardDetails.js';
import Footer from './Footer.js';

function App() {
  const [cards, setCards] = useState(findDataStrict("category", "shoes"));
  const [cartElements, setCartElements] = useState([]);

  function handleMenuClick(event) {
    const newCards = findDataStrict("category", event.target.id);
    setCards(newCards);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleDetailsClick(event) {
    const newCard = findDataStrict("id", event.target.id);
    setCards(newCard[0]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleSearchClick() {
    let searchString = document.getElementById('search-field').value;
    const newCards = findDataByName(searchString);
    setCards(newCards);
  }

  function handleAddElementToCart(card) {
    const newCartElements = [...cartElements];
    newCartElements.push(card);
    setCartElements(newCartElements);
  }

  function handleDeleteCartElement(index) {
    let newCartElements = [...cartElements];
    let inCart = document.querySelector('.inCart');
    newCartElements.splice(index, 1);
    setCartElements(newCartElements);
    newCartElements.length === 0 ? inCart.classList.remove('active') : inCart.classList.add('active');
  }

  function defineEl() {
    if (Array.isArray(cards)) return <CardsGrid cards={cards} handleDetailsClick={handleDetailsClick} />
    return <CardDetails card={cards} handleAddElementToCart={handleAddElementToCart} />
  }

  return (
    <>
      <Header handleMenuClick={handleMenuClick} handleSearchClick={handleSearchClick} cartElements={cartElements} handleDeleteCartElement={handleDeleteCartElement} />
      {defineEl()}
      <Footer />
    </>
  );
}

export default App;