import { useState } from 'react';

import itemBase from './base_items.json';
import Header from './components/Header';
import Categories from './components/Categories';
import Items from './components/Items';
import Footer from './components/Footer';
import ShowFullItem from './components/ShowFullItem';

function App() {
  const [items, setItems] = useState(itemBase);
  const [choosedCategory, setChoosedCategory] = useState(items);
  const [basketOrder, setBasketOrder] = useState([]);
  const [isShowFullItem, setIsShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState({});

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
    if (category === 'all') {
      setChoosedCategory(items);
      return;
    }

    setChoosedCategory(items.filter(el => el.category === category));
  };

  const changeShowFullItem = item => {
    setFullItem(item);
    setIsShowFullItem(!isShowFullItem);
  };

  return (
    <div className="wrapper">
      <Header orders={basketOrder} onDelete={deleteOrder} />
      <Categories chooseCategory={chooseCategory} />
      <Items
        onAddOrder={addToBasketOrder}
        items={choosedCategory}
        onChangeShowFullItem={changeShowFullItem}
      />
      {isShowFullItem && (
        <ShowFullItem
          item={fullItem}
          onAddOrder={addToBasketOrder}
          onChangeShowFullItem={changeShowFullItem}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
