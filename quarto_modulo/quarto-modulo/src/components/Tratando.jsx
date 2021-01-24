import React, { useState } from 'react'
import { Produto } from './Produto';

const Tratando = () => {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(null);

  async function handleClick({target: {innerText}}) {
    setCarregando(true);
    const url = 'https://ranekapi.origamid.dev/json/api/produto/'
    const endPoint = innerText;
    const response = await fetch(`${url}${endPoint}`);
    const json = await response.json();
    setDados(json);
    setCarregando(false);

  }
  return (
    <div>
      <button onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>tablet</button>
      <button onClick={handleClick}>notebook</button>
      {!!carregando ? 'Loading...' : null}
      {!carregando && !!dados ? <Produto dados={dados} /> : null}
    </div>
  )
}

export default Tratando
