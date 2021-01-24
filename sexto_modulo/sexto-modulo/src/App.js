import React from 'react';
import { GlobalStorage } from './GlobalContext';
import Produto from './Produto';
import { Calculadora } from './useContexto/Calculadora';
function App() {
  return (
    <div>
      <GlobalStorage>
        <Produto />
        <Calculadora />
      </GlobalStorage>
    </div>
  );
}

export default App;
