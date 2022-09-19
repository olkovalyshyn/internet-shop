export default function Item(props) {
  return (
    <div className="item">
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
  );
}
