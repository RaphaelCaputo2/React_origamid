import React from 'react';
import GlobalContext from '../context/GlobalContext';

const Testando = () => {
  const global = React.useContext(GlobalContext);
  if (global.data === null) return null;
  return (
    <div>
      <br />
      Produto: {''}
      {global.data.map((nome, id) => (
        <li key={id}>
          {nome.nome}, com o preço: <strong> R$ {nome.preco}</strong>
        </li>
      ))}
    </div>
  );
};
export default Testando;
