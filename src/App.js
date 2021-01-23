import React from 'react';



function App() {
  const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500'},
      { nome: 'Geladeira', preco: 'R$ 3000'},
      { nome: 'Smartphone', preco: 'R$ 1500'},
    ],
    ativa: true,
  };
  const mario = {
    cliente: 'Mario',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500'},
      { nome: 'Geladeira', preco: 'R$ 3000'},
      { nome: 'Smartphone', preco: 'R$ 1500'},
      { nome: 'Guitarra', preco: 'R$ 3500'},
    ],
    ativa: false,
  };

  const data = luana;

 const total = data.compras.map((item) => Number(item.preco.replace('R$ ', '')))
 .reduce((acc, cur) => {
   return acc + cur;
 });

const acima = 10000;
 
  return (
   <div>
     <h1> Clientes:</h1>
     <h2>Nome: {data.cliente}</h2>
     <p>Idade: {data.idade} </p>
     <p>Situação: <span style={{color:!data.ativa ? 'red' : 'green' }}>{!data.ativa ? 'Inativa' : 'Ativa'}</span></p>
     <p>Total gasto: R$ {total} </p>
     <strong>{total > acima && 'Voce esta gastando muito'  }</strong>
    
     
     
   </div>
  );
}

export default App;
