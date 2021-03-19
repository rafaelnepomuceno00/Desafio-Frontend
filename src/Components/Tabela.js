import Anlise from './Analise';
import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import './Tabela.css';
import Contas from './Contas';
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
           
          </th>
          <th className="tableHead">
            
          </th>
          <th className="tableHead">
            
          </th>
          <th className="tableHead">
            
          </th>
          <th className="tableHead">
            
          </th>
        </thead>
        <tbody>
                <Anlise></Anlise>
                <Contas></Contas>
        </tbody>
      </Table>
      <Button> Cadastrar</Button>
    </>
  );
}

export default Tabela;
