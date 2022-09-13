import Item from './Item';

export default function Items(props) {
  return (
    <main>
      {props.items.map(el => (
        <Item key={el.id} item={el} onAddOrder={props.onAddOrder} />
      ))}
    </main>
  );
}
