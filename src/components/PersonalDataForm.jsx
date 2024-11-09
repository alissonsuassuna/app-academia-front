import React, { useState } from "react";

function PersonalDataForm() {

    const [formDate, setFormDate] = useState({
        name: '',
        height: '',
        weight: ''

    })

    const mudou = (event) => {
        setFormDate({ ...formDate, [event.target.name]: event.target.value})
    }
    
    const testeForm = (event) => {
        event.preventDefault()
        console.log(formDate)
    }

    return (
        <section>
            <h1> Dados pessoas do cliente</h1>

            <form onSubmit={testeForm}>
                <label>Nome:</label>
                <input type="text" name="name" onChange={mudou} value={formDate.name} placeholder="Nome do aluno"/>

                <input type="text" name="height" onChange={mudou} value={formDate.height} placeholder="Altura"/>

                <input type="text" name="weight" onChange={mudou} value={formDate.weight} placeholder="Peso"/>

                <button type="submit">Salvar Dados</button>
            </form>
        </section>
    )

}

export default PersonalDataForm