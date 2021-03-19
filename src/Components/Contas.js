import React, { useState } from 'react';

function Contas() {
  const [Conta, setConta] = useState([]);
  const [Cliente, setCliente] = useState([]);
  const [Transacao, setTransacao] = useState([]);
  const [ContasDigitais, setContasDigitais] = useState([]);


  function salvarContas({ target }) {
    if (target.checked) {
        setConta([...Conta, target.value]);
    } else {
        setConta(Conta.filter((item) => item !== target.value));
    }
  }
  function salvarCliente({ target }) {
    if (target.checked) {
        setCliente([...Cliente, target.value]);
    } else {
        setCliente(Cliente.filter((item) => item !== target.value));
    }
  }
  function salvarTransacao({ target }) {
    if (target.checked) {
        setTransacao([...Transacao, target.value]);
    } else {
        setTransacao(Transacao.filter((item) => item !== target.value));
    }
  }
  function salvarContasDigitais({ target }) {
    if (target.checked) {
        setContasDigitais([...ContasDigitais, target.value]);
    } else {
        setContasDigitais(ContasDigitais.filter((item) => item !== target.value));
    }
  }

  return (
    <>
      <tr>
        <td className="tdTitulo">
          Contas <i className="material-icons">keyboard_arrow_down</i>
        </td>
        <td>
          <input
            className="listagem"
            type="checkbox"
            value="Contas - Ver Listagem - Todos"
            onChange={salvarContas}
          />
        </td>
        <td>
          <input
            className="listagem"
            type="checkbox"
            value="Contas - Ver Detalhes - Todos"
            onChange={salvarContas}
          />
        </td>
        <td>
          <input
            className="listagem"
            type="checkbox"
            value="Contas - Criar - Todos"
            onChange={salvarContas}
          />
        </td>
        <td>
          <input
            className="listagem"
            type="checkbox"
            value="Contas - Ver Editar - Todos"
            onChange={salvarContas}
          />
        </td>
        <td>
          <input
            className="listagem"
            type="checkbox"
            value="Contas - Ver Deletar - Todos"
            onChange={salvarContas}
          />
        </td>
      </tr>
      <tr>
          <td>Cliente</td>
          <td><input onChange={salvarCliente} type="checkbox" value='Cliente - Ver Listagem '/></td>
          <td><input onChange={salvarCliente} type="checkbox" value='Cliente - Ver Detalhes'/></td>
          <td><input onChange={salvarCliente} type="checkbox" value='Cliente - Criar'/></td>
          <td><input onChange={salvarCliente} type="checkbox" value='Cliente - Editar'/></td>
          <td><input onChange={salvarCliente} type="checkbox" value='Cliente - Deleter'/></td>
      </tr>
      <tr>
          <td>Transação</td>
          <td><input onChange={salvarTransacao} type="checkbox" value='Transação - Ver Listagem '/></td>
          <td><input onChange={salvarTransacao} type="checkbox" value='Transação - Ver Detalhes '/></td>
          <td><input onChange={salvarTransacao} type="checkbox" value='Transação - Criar '/></td>
          <td><input onChange={salvarTransacao} type="checkbox" value='Transação - Editar '/></td>
          <td><input onChange={salvarTransacao} type="checkbox" value='Transação - Deleter '/></td>
      </tr>
      <tr>
          <td>Contas Digitais</td>
          <td><input onChange={salvarContasDigitais} type="checkbox" value='Contas Digitais - Ver Listagem '/></td>
          <td><input onChange={salvarContasDigitais} type="checkbox" value='Contas Digitais - Ver Detalhes '/></td>
          <td><input onChange={salvarContasDigitais} type="checkbox" value='Contas Digitais - Criar '/></td>
          <td><input onChange={salvarContasDigitais} type="checkbox" value='Contas Digitais - Editar '/></td>
          <td><input onChange={salvarContasDigitais} type="checkbox" value='Contas Digitais - Deleter '/></td>
      </tr>
    </>
  );
}

export default Contas;
