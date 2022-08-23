import { useState } from 'react';

import Header from './components/Header';
import Items from './components/Items';
import Footer from './components/Footer';

function App() {
  const [items, setItems] = useState([]);
  return (
    <div className="wrapper">
      <Header />
      <Items />
      <Footer />
    </div>
  );
}

export default App;
