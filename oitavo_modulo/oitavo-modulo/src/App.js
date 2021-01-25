import React, { useState } from 'react';
import { useFetch } from './useFetch';

function App() {
  const { data, loading, error, request } = useFetch();
  const [newData, setNewData] = React.useState({});

  React.useEffect(() => {
    request('https://ranekapi.origamid.dev/json/api/produto/');
  }, []);

  const handleInput = () => {
    if (data === null) return null;
    const encontrar = data.map((produto) => setNewData(produto));
    return encontrar;
  };

  if (loading) return <p>Carregando...</p>;
  if (data)
    return (
      <div>
        <input type='text' onChange={() => handleInput()} />
        <p>{!newData ? 'Oi' : newData.id.map((id) => id.includes('notebook'))}</p>
      </div>
    );
  else return null;
}

export default App;
