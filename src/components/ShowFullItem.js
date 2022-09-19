import { FaWindowClose } from 'react-icons/fa';

export default function ShowFullItem(props) {
  return (
    <div className="full-item">
      <div>
        <FaWindowClose
          className="close-modal"
          onClick={() => props.onChangeShowFullItem()}
        />
        <img
          src={'./img/' + props.item.img}
          onClick={() => props.onChangeShowFullItem(props.item)}
        />
        <h2>{props.item.title}</h2>
        <p>{props.item.desc}</p>
        <p className="price">{props.item.price} грн.</p>
        <div
          className="add-to-cart"
          onClick={() => {
            props.onAddOrder(props.item);
          }}
        >
          +
        </div>
      </div>
    </div>
  );
}
