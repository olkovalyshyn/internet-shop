import { useState } from 'react';

import Header from './components/Header';
import Items from './components/Items';
import Footer from './components/Footer';

function App() {
  // const [items, setItems] = useState([]);
  const [basketOrder, setBasketOrder] = useState([]);

  const addToBasketOrder = item => {
    let isInArray = false;
    basketOrder.forEach(el => {
      if (el.id === item.id) isInArray = true;
    });
    if (isInArray === false) setBasketOrder([...basketOrder, item]);
  };

  return (
    <div className="wrapper">
      <Header orders={basketOrder} />
      <Items onAddOrder={addToBasketOrder} />
      <Footer />
    </div>
  );
}

export default App;
