import itemsBase from '../base_items.json';
import Item from './Item';

export default function Items() {
  return (
    <main>
      {itemsBase.map(el => (
        <Item key={el.id} item={el} />
      ))}
    </main>
  );
}
