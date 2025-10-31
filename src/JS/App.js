import { useState } from 'react';
import Header from './Header';
import CardsGrid from './CardsGrid';
import { data } from './data.js'

function App() {
  const [cards, setCards] = useState(data.shoes)

  function handleMenuClick(event) {
    const newCards = data[event.target.id];
    setCards(newCards);
  }

  return (
    <>
      <Header handleMenuClick={handleMenuClick}/>
      <CardsGrid cards={cards}/>
    </>
  );
}

export default App;