import { FaTrash } from 'react-icons/fa';

export default function Order(props) {
  return (
    <div className="item">
      <img src={'./img/' + props.item.img} />
      <h2>{props.item.title}</h2>
      <p className="price">{props.item.price} грн.</p>
      <FaTrash className="del-icon" />
    </div>
  );
}
