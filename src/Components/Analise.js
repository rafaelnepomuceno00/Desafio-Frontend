import React, { useState } from 'react';

function Analise() {
  const [Analise, setAnalise] = useState([]);
  const [AnaliseDeConta, setAnaliseDeConta] = useState([]);
  const [AnaliseDeTransicao, setAnaliseDeTransicao] = useState([]);

  function salvarAnalise({ target }) {
    if (target.checked) {
      setAnalise([...Analise, target.value]);
    } else {
      setAnalise(Analise.filter((item) => item !== target.value));
    }
  }

  function salvarAnaliseDeConta({ target }) {
    if (target.checked) {
      setAnaliseDeConta([...AnaliseDeConta, target.value]);
    } else {
      setAnaliseDeConta(AnaliseDeConta.filter((item) => item !== target.value));
    }
  }

  function salvarAnaliseDeTransicao({ target }) {
    if (target.checked) {
      setAnaliseDeTransicao([...AnaliseDeTransicao, target.value]);
    } else {
      setAnaliseDeTransicao(
        AnaliseDeTransicao.filter((item) => item !== target.value),
      );
    }
  }

  function desabilitar(){}
  
  return (
    <>
      <tr>
        <td className="tdTitulo">
          Análise <i className="material-icons">keyboard_arrow_down</i>
        </td>
        <td>
          <input
            className="select-listagem"
            type="checkbox"
            value="Analise - Ver Listagem - Todos"
            onChange={salvarAnalise}
          />
        </td>
        <td>
          <input
            className="select-detalhes"
            type="checkbox"
            value="Analise - Ver Detalhes - Todos"
            onChange={salvarAnalise}
          />
        </td>
        <td>
          <input
            type="checkbox"
            className="select-criar"
            value="Analise - Criar - Todos"
            onChange={salvarAnalise}
          />
        </td>
        <td>
          <input
            className="select-editar"
            type="checkbox"
            value="Analise - Editar - Todos"
            onChange={salvarAnalise}
          />
        </td>
        <td>
          <input
            className="select-deletar"
            type="checkbox"
            value="Analise - Deletar - Todos"
            onChange={salvarAnalise}
          />
        </td>
      </tr>
      <tr className="analise">
        <td>Análise de Conta </td>
        <td>
          <input
            className="analiseListagem select-listagem"
            type="checkbox"
            value="Analise de Conta - Ver Listagem"
            onChange={salvarAnaliseDeConta}
          />
        </td>
        <td>
          <input
            className="analiseDetalhe select-detalhes"
            type="checkbox"
            value="Analise de Conta - Ver Detalhes"
            onChange={salvarAnaliseDeConta}
          />
        </td>
        <td>
          <input
            className="analiseCriar select-criar"
            type="checkbox"
            value="Analise de Conta - Criar"
            onChange={salvarAnaliseDeConta}
          />
        </td>
        <td>
          <input
            className="analiseEditar select-editar"
            type="checkbox"
            value="Analise de Conta - Editar"
            onChange={salvarAnaliseDeConta}
          />
        </td>
        <td>
          <input
            className="analiseExcluir select-deletar"
            type="checkbox"
            value="Analise de Conta - Deletar"
            onChange={salvarAnaliseDeConta}
          />
        </td>
      </tr>
      <tr className="analise">
        <td>Análise de transição</td>
        <td>
          <input
            className="analiseListagem select-listagem "
            type="checkbox"
            value="Analise de Conta - Ver Listagem"
            onChange={salvarAnaliseDeTransicao}
          />
        </td>
        <td>
          <input
            className="analiseDetalhe select-detalhes"
            type="checkbox"
            value="Analise de Conta - Ver Detalhes"
            onChange={salvarAnaliseDeTransicao}
          />
        </td>
        <td>
          <input
            className="analiseCriar select-criar"
            type="checkbox"
            value="Analise de Conta - Criar"
            onChange={salvarAnaliseDeTransicao}
          />
        </td>
        <td>
          <input
            className="analiseEditar select-editar"
            type="checkbox"
            value="Analise de Conta - Editar"
            onChange={salvarAnaliseDeTransicao}
          />
        </td>
        <td>
          <input
            className="analiseExcluir select-deletar"
            type="checkbox"
            value="Analise de Conta - Deletar"
            onChange={salvarAnaliseDeTransicao}
          />
        </td>
      </tr>
    </>
  );
}

export default Analise;
