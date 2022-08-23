export default function Item(props) {
  return (
    <div className="item">
      <img src={'./img/' + props.item.img} />
      <h2>{props.item.title}</h2>
      <p>{props.item.desc}</p>
      <p className="price">{props.item.price} грн.</p>
      <div className="add-to-cart">+</div>
    </div>
  );
}