import React, {useState, createContext} from 'react'



export const TabelasContexto = createContext()

export function TabelaProvider(props){
    return(
        <TabelasContexto.Provider>
             {
                 props.children
             }
        </TabelasContexto.Provider>
    )
}