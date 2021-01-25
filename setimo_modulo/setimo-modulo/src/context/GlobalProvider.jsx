import React from 'react';
import GlobalContext from './GlobalContext';

const GlobalProvider = ({ children }) => {
  const [data, setData] = React.useState([]);

  function limparDados() {
    setData(null);
  }

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  return (
    <GlobalContext.Provider value={{ data, limparDados }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
