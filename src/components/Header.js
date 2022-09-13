import React, { useState } from 'react';

import { FaShoppingCart } from 'react-icons/fa';
import Order from './Order';

export default function Header(props) {
  const [basketIsOpen, setBasketIsOpen] = useState(false);

  const showOrders = props => {
    let summOrder = 0;
    props.orders.forEach(el => (summOrder += Number.parseFloat(el.price)));

    return (
      <div>
        {props.orders.map(el => (
          <Order key={el.id} item={el} onDelete={props.onDelete} />
        ))}
        <p className="summOrder">Разом: {summOrder.toFixed(2)} грн.</p>
      </div>
    );
  };

  const showNothing = () => {
    return <h2 className="empty">Товари відсутні</h2>;
  };

  return (
    <header>
      <div>
        <span className="logo">Oil</span>

        <ul className="nav">
          <li>Про нас</li>
          <li>Контакти</li>
        </ul>
        <FaShoppingCart
          onClick={() => setBasketIsOpen(!basketIsOpen)}
          className={`shop-basket-button ${basketIsOpen && 'active'}`}
        />

        {basketIsOpen && (
          <div className="shop-basket">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
        <div className="hero"></div>
      </div>
    </header>
  );
}
