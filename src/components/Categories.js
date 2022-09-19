import { useState } from 'react';

export default function Categories(props) {
  const [categories, setCategories] = useState([
    {
      key: 'all',
      name: 'Усі',
    },
    {
      key: 'oil',
      name: 'Автомастила',
    },
    {
      key: 'antifrize',
      name: 'Антифриз',
    },
    {
      key: 'aksesuar',
      name: 'Аксесуари',
    },
    {
      key: 'filter',
      name: 'Фільтри',
    },
  ]);

  return (
    <div className="categories">
      {categories.map(el => (
        <div key={el.key} onClick={() => props.chooseCategory(el.key)}>
          {el.name}
        </div>
      ))}
    </div>
  );
}
