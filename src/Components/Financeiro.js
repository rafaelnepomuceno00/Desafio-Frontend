import React, { useState } from 'react'

function Financeiro() {

    const [Fincanceiro, setFincanceiro] = useState([]);
    const [Entradas, setEntradas] = useState([]);

    function salvarFinanceiro({ target }) {
        if (target.checked) {
            setFincanceiro([...Fincanceiro, target.value]);
        } else {
            setFincanceiro(Fincanceiro.filter((item) => item !== target.value));
        }
      }
      function salvarEntradas({ target }) {
        if (target.checked) {
            setEntradas([...Entradas, target.value]);
        } else {
            setEntradas(Entradas.filter((item) => item !== target.value));
        }
      }


    return (
        <>
        <tr>
        <td  className="tdTitulo">Fincanceiro</td>
        <td><input onChange={salvarFinanceiro} type="checkbox" value='Financeiro - Ver Listagem '/></td>
        <td><input onChange={salvarFinanceiro} type="checkbox" value='Financeiro - Ver Detalhes'/></td>
        <td><input onChange={salvarFinanceiro} type="checkbox" value='Financeiro - Criar'/></td>
        <td><input onChange={salvarFinanceiro} type="checkbox" value='Financeiro - Editar'/></td>
        <td><input onChange={salvarFinanceiro} type="checkbox" value='Financeiro - Deleter'/></td>
        </tr>  
        
        <tr>
        <td>Entradas</td>
        <td><input onChange={salvarEntradas} type="checkbox" value='Entradas - Ver Listagem '/></td>
        <td><input onChange={salvarEntradas} type="checkbox" value='Entradas - Ver Detalhes'/></td>
        <td><input onChange={salvarEntradas} type="checkbox" value='Entradas - Criar'/></td>
        <td><input onChange={salvarEntradas} type="checkbox" value='Entradas - Editar'/></td>
        <td><input onChange={salvarEntradas} type="checkbox" value='Entradas - Deleter'/></td>
        </tr>  
        </>
    )
}

export default Financeiro
