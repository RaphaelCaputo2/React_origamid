import React from 'react';
import GlobalContext from '../context/GlobalContext';

export const LimparTudo = () => {
  const { limparDados } = React.useContext(GlobalContext);
  return (
    <div>
      <button onClick={limparDados}>Limpar</button>
    </div>
  );
};
