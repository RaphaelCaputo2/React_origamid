import React, { useEffect, useState } from 'react';
const { Produto } = require('./components/Produto');

function App() {
  const [data, setData] = useState({});
  async function handleButton(event) {
    const url = 'https://ranekapi.origamid.dev/json/api/produto/';
    const endPoint = event.target.innerText;
    const api = await fetch(`${url}${endPoint}`);
    const toJson = await api.json();
    localStorage.setItem(`${endPoint}`, JSON.stringify(toJson));
    setData(toJson);
  }

  useEffect(() => {
    async function fetchLocal() {
      try {
        if (localStorage.length >= 0) {
          const checkLocal = localStorage.key(0);
          const url = 'https://ranekapi.origamid.dev/json/api/produto/';
          const endPoint = checkLocal;
          const api = await fetch(`${url}${endPoint}`);
          const toJson = await api.json();
          setData(toJson);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchLocal();
  }, []);

  return (
    <div>
      <button type='button' onClick={handleButton}>
        notebook
      </button>
      <button type='button' onClick={handleButton}>
        smartphone
      </button>
      {data === '' ? 'Carregando...' : <Produto produto={data} />}
    </div>
  );
}

export default App;
