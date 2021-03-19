import Anlise from './Analise';
import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import './Tabela.css';
import Contas from './Contas';
import Customizacao from './Customizacao';
import Financeiro from './Financeiro';
function Tabela() {
 
  const [Analise, SetAnalise] = useState(false);
  const [AnlConta, SetAnlConta] = useState(false);
  const [AnlTrans, SetAnlTrans] = useState(false);

  return (
    <>
      <Table borderless>
        <thead>
          <th>Todos</th>
          <th className="tableHead">
          <input
            className="select-listagem"
            type="checkbox"
            value="Ver Listagem - Todos"
          />
          </th>
          <th className="tableHead">
          <input
            className="select-listagem"
            type="checkbox"
            value="Ver Detalhes - Todos"
          />
          </th>
          <th className="tableHead">
          <input
            className="select-listagem"
            type="checkbox"
            value="Criar- Todos"
          />
          </th>
          <th className="tableHead">
          <input
            className="select-listagem"
            type="checkbox"
            value="Editar- Todos"
          />
          </th>
          <th className="tableHead">
          <input
            className="select-listagem"
            type="checkbox"
            value="Deletar- Todos"
          />
          </th>
        </thead>
        <tbody>
                <Anlise></Anlise>
                <Contas></Contas>
                <Customizacao></Customizacao>
                <Financeiro></Financeiro>
        </tbody>
      </Table>
      <div className='Divbtn'>
      <Button variant="secondary" className='botao'> Cadastrar</Button>
      </div>
    </>
  );
}

export default Tabela;
