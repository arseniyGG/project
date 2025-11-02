import { useState } from 'react';
import Header from './Header';
import CardsGrid from './CardsGrid';
import { data } from './data.js'
import CardDetails from './CardDetails.js';

function App() {
  const [cards, setCards] = useState(data.shoes)

  function handleMenuClick(event) {
    const newCards = data[event.target.id];
    setCards(newCards);
  }

  function handleDetailsClick(event) {
    const newCard = cards.filter(card =>
      card.id === Number(event.target.id)
    );
    setCards(newCard[0]);
  }

  if (Array.isArray(cards)) {
    return (
      <>
        <Header handleMenuClick={handleMenuClick} />
        <CardsGrid cards={cards} handleDetailsClick={handleDetailsClick} />
      </>
    );
  }
  return (
    <>
      <Header handleMenuClick={handleMenuClick} />
      <CardDetails cards={cards} />
    </>
  );
}

export default App;