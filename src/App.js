import { useState } from 'react';

import itemBase from './base_items.json';
import Header from './components/Header';
import Categories from './components/Categories';
import Items from './components/Items';
import Footer from './components/Footer';

function App() {
  const [items, setItems] = useState(itemBase);
  const [choosedCategory, setChoosedCategory] = useState(items);
  const [basketOrder, setBasketOrder] = useState([]);

  const addToBasketOrder = item => {
    let isInArray = false;
    basketOrder.forEach(el => {
      if (el.id === item.id) isInArray = true;
    });
    if (isInArray === false) setBasketOrder([...basketOrder, item]);
  };

  const deleteOrder = id => {
    setBasketOrder(basketOrder.filter(el => el.id !== id));
  };

  const chooseCategory = category => {
    // setChoosedCategory(items.filter(el => el.category === category));
    setChoosedCategory(
      items.filter(el => console.log(el.category), console.log(category)),
    );
  };

  return (
    <div className="wrapper">
      <Header orders={basketOrder} onDelete={deleteOrder} />
      <Categories chooseCategory={chooseCategory} />
      <Items onAddOrder={addToBasketOrder} items={choosedCategory} />
      <Footer />
    </div>
  );
}

export default App;
