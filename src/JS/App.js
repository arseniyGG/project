import { useState } from 'react';
import Header from './Header';
import CardsGrid from './CardsGrid';
import { findData } from './data.js'
import CardDetails from './CardDetails.js';

function App() {
  const [cards, setCards] = useState(findData("category", "shoes"));

  function handleMenuClick(event) {
    const newCards = findData("category", event.target.id);
    setCards(newCards);
  }

  function handleDetailsClick(event) {
    const newCard = findData("id", event.target.id);
    setCards(newCard[0]);
  }

  function defineEl() {
    if (Array.isArray(cards)) return <CardsGrid cards={cards} handleDetailsClick={handleDetailsClick} />
    return <CardDetails cards={cards} />
  }

  return (
    <>
      <Header handleMenuClick={handleMenuClick} />
      {defineEl()}
    </>
  );
}

export default App;