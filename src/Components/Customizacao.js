import React, { useState } from 'react'

function Customizacao() {

    const [Customizacao, setCustomizacao] = useState([]);
    const [Limites, setLimites] = useState([]);
    const [Tarifas, setTarifas] = useState([]);
    const [TarifasP, setTarifasP] = useState([]);
    const [Conta, setConta] = useState([])

    function salvarCustomizacao({ target }) {
        if (target.checked) {
            setCustomizacao([...Customizacao, target.value]);
        } else {
            setCustomizacao(Customizacao.filter((item) => item !== target.value));
        }
      }   
       function salvarTarifas({ target }) {
        if (target.checked) {
            setTarifas([...Tarifas, target.value]);
        } else {
            setTarifas(Tarifas.filter((item) => item !== target.value));
        }
      }
      function salvarLimites({ target }) {
        if (target.checked) {
            setLimites([...Limites, target.value]);
        } else {
            setLimites(Limites.filter((item) => item !== target.value));
        }
      }
      function salvarTarifasP({ target }) {
        if (target.checked) {
            setTarifasP([...TarifasP, target.value]);
        } else {
            setTarifasP(TarifasP.filter((item) => item !== target.value));
        }
      }
      function salvarConta({ target }) {
        if (target.checked) {
            setConta([...Conta, target.value]);
        } else {
            setConta(Conta.filter((item) => item !== target.value));
        }
      }
    return (
        <> 
        <tr>
        <td  className="tdTitulo">Customização</td>
        <td><input onChange={salvarCustomizacao} type="checkbox" value='Customização - Ver Listagem '/></td>
        <td><input onChange={salvarCustomizacao} type="checkbox" value='Customização - Ver Detalhes'/></td>
        <td><input onChange={salvarCustomizacao} type="checkbox" value='Customização - Criar'/></td>
        <td><input onChange={salvarCustomizacao} type="checkbox" value='Customização - Editar'/></td>
        <td><input onChange={salvarCustomizacao} type="checkbox" value='Customização - Deleter'/></td>
        </tr>
        
        <tr>
          <td>Limites e Horários</td>
          <td><input onChange={salvarLimites} type="checkbox" value='Limites e Horários - Ver Listagem '/></td>
          <td><input onChange={salvarLimites} type="checkbox" value='Limites e Horários - Ver Detalhes '/></td>
          <td><input onChange={salvarLimites} type="checkbox" value='Limites e Horários - Criar '/></td>
          <td><input onChange={salvarLimites} type="checkbox" value='Limites e Horários - Editar '/></td>
          <td><input onChange={salvarLimites} type="checkbox" value='Limites e Horários - Deleter '/></td>
      </tr>

      <tr>
          <td>Tarifas</td>
          <td><input onChange={salvarTarifas} type="checkbox" value='Tarifas - Ver Listagem '/></td>
          <td><input onChange={salvarTarifas} type="checkbox" value='Tarifas - Ver Detalhes '/></td>
          <td><input onChange={salvarTarifas} type="checkbox" value='Tarifas - Criar '/></td>
          <td><input onChange={salvarTarifas} type="checkbox" value='Tarifas - Editar '/></td>
          <td><input onChange={salvarTarifas} type="checkbox" value='Tarifas - Deleter '/></td>
      </tr>

      <tr>
          <td>Tarifas Personalizadas</td>
          <td><input onChange={salvarTarifasP} type="checkbox" value='Tarifas Personalizadas - Ver Listagem '/></td>
          <td><input onChange={salvarTarifasP} type="checkbox" value='Tarifas Personalizadas - Ver Detalhes '/></td>
          <td><input onChange={salvarTarifasP} type="checkbox" value='Tarifas Personalizadas - Criar '/></td>
          <td><input onChange={salvarTarifasP} type="checkbox" value='Tarifas Personalizadas - Editar '/></td>
          <td><input onChange={salvarTarifasP} type="checkbox" value='Tarifas Personalizadas - Deleter '/></td>
      </tr>

      <tr>
          <td>Conta</td>
          <td><input onChange={salvarConta} type="checkbox" value='Conta - Ver Listagem '/></td>
          <td><input onChange={salvarConta} type="checkbox" value='Conta - Ver Detalhes '/></td>
          <td><input onChange={salvarConta} type="checkbox" value='Conta - Criar '/></td>
          <td><input onChange={salvarConta} type="checkbox" value='Conta - Editar '/></td>
          <td><input onChange={salvarConta} type="checkbox" value='Conta - Deleter '/></td>
      </tr>
        </>
    )
}

export default Customizacao
