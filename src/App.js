import './App.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabela from './Components/Tabela';

function App() {
  return (
    <>
      <Container fluid>
        <h1 className="mb-5 mt-2 ml-5 titulo">Tabela de Permissões</h1>
       
        <div className="tabela mx-5">
        <tr className='teste'>
          <th className='primeiro'></th>
          <th>Ver listagem</th>
          <th>Ver detalhes</th>
          <th>Criar</th>
          <th>Editar</th>
          <th className='ultimo'>Deletar</th>
        </tr>
        <Tabela/>
        </div>
      </Container>
    </>
  );
}

export default App;
