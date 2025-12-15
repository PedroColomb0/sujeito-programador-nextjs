'use client'

import { useState } from "react"

export function Button(){

    const [nome, setNome] = useState("Pedro")

    function handleChangeName(){
        setNome("Pedro")
    }

    return(
        <div>
            <button onClick={handleChangeName}>Alterar Nome</button>
        </div>
    )
}