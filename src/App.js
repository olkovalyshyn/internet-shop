import { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [items, setItems] = useState[''];
  return (
    <div className="wrapper">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
