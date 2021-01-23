import React from 'react';

const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],

},
{
  id: 2,
  nome: 'Notebook',
  preco: 'R$ 3000',
  cores: ['#ffd045', '#d4394b', '#f37c59'],

},
{
  id: 3,
  nome: 'tablet',
  preco: 'R$ 1500',
  cores: ['#365069', '#47c1c8', '#f95786'],

},
];


function App() {
  const data = produtos.filter(({preco}) => (
    Number(preco.replace('R$ ', '') > 1500)
  ));


  return (
 <section>
    {data.map(({nome, preco, cores, id}) => (
      <div key={id}>
     <h1>{nome}</h1>
     <p>Preço: {preco}</p>
     <ul>
     <p>{cores.map((cor) => (
<li style={{backgroundColor:cor, color:'white', maxWidth:100}}key={cor}>{cor}</li>
     ))}</p>
     </ul>
     </div>
    ))}
 </section>
  );
}

export default App;
