import React, { useContext } from 'react';
import { GlobalContext } from '../GlobalContext';
export const Calculadora = () => {
  const acesso = useContext(GlobalContext);
  const { contar, adicionar, subtrair, dividir, multiplicar } = acesso;

  return (
    <div>
      <h1>Tudo começa nesse valor {contar}</h1>
      <button onClick={adicionar}>Adcionar</button>
      <button onClick={subtrair}>Subtrair</button>
      <button onClick={multiplicar}>Multiplicar</button>
      <button onClick={dividir}>Dividir</button>
    </div>
  );
};
