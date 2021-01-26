import React from 'react';

const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'text',
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'Cep',
    type: 'text',
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'Número',
    type: 'text',
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  },
];

function App() {
  const [form, setForm] = React.useState(
    formFields.reduce((acc, field) => {
      console.log(field.label);
      return {
        ...acc,
        [field.id]: '',
      };
    }, {}),
  );
  const [resOk, setResOk] = React.useState(null);

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setResOk(response);
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {formFields.map((form) => {
          return (
            <div key={form.id}>
              <label htmlFor={form.id}>{form.label}</label>
              <input value={form[form.id]} type={form.type} onChange={handleChange} />
            </div>
          );
        })}
        {resOk ? (
          <p>Usuário Cadastrado</p>
        ) : (
          <p>Preencha o formulário para Receber dinheiro</p>
        )}
        <button>Enviar</button>
      </div>
    </form>
  );
}

export default App;
