import React from 'react';
import Header from './components/Header';
import Produtos from './components/produtos';

import Home from './pages/Home';

function App() {
  return (
    <section>
      <Header />
      {window.location.pathname === '/' ? <Home /> : <Produtos />}
    </section>
  );
}

export default App;
