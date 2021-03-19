import './App.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabela from './Components/Tabela';

function App() {
  return (
    <>
      <Container fluid>
        <h1 className="mb-5 mt-2 ml-5 titulo">Tabela de Permissões</h1>
        <div className=" tituloTabela">
          <p>Ver listagem</p>
          <p>Ver detalhes</p>
          <p>Criar</p>
          <p>Editar</p>
          <p>Deletar</p>
        </div>
        <div className="tabela mx-5">
        
        <Tabela/>
        </div>
      </Container>
    </>
  );
}

export default App;
