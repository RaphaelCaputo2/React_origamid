import React from 'react';

export const Produto = ({ produto }) => {
  return (
    <section>
      <header>{produto.nome}</header>
      <h1>{produto.preco}</h1>
      <p>{produto.descricao}</p>
    </section>
  );
};
