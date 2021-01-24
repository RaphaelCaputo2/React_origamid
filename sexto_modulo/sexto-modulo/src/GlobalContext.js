import React, { createContext } from 'react';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [contar, setContar] = React.useState(0);
  function adicionar() {
    setContar((contar) => contar + 1);
  }
  function multiplicar() {
    setContar((contar) => contar * 2);
  }
  function subtrair() {
    setContar((contar) => contar - 1);
  }
  function dividir() {
    setContar((contar) => contar / 2);
  }
  return (
    <GlobalContext.Provider value={{ contar, adicionar, multiplicar, subtrair, dividir }}>
      {children}
    </GlobalContext.Provider>
  );
};
