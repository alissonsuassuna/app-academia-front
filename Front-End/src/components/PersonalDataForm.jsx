import React, { useState } from "react";

function PersonalDataForm() {

    const [formDate, setFormDate] = useState({
        name: '',
        height: '',
        weight: ''

    })
    const [imc, setImc] = useState(null)

    const imcCalc = (weight, height) => {
        return weight/(height*height)
    }

    const mudou = (event) => {
        setFormDate({ ...formDate, [event.target.name]: event.target.value})

        //Apaga o valor do imc durante a edição
        setImc(null)
        console.log(event.target.type)
    }
    
    const testeForm = (event) => {
        event.preventDefault()
        console.log(formDate)
        setImc(imcCalc(formDate.weight, formDate.height))
    }

    return (
        <section>
            <h1> Dados pessoais do cliente</h1>

            <form onSubmit={testeForm}>
                <label>Nome:</label>
                <input type="text" name="name" onChange={mudou} value={formDate.name} placeholder="Nome do aluno"/>

                <input type="number" max="3"  step="0.01" min="0" name="height" onChange={mudou} value={formDate.height} placeholder="Altura"/>

                <input type="number" max="300"  step="0.1" min="0" name="weight" onChange={mudou} value={formDate.weight} placeholder="Peso"/>

                <button type="submit">Salvar Dados</button>
            </form>

            {/* Resultado */}
            <div>
                <h2> Seu IMC é:</h2>
                <p>{imc?imc.toFixed(2):"Salve dados para exibir"}</p>
            </div>

        </section>
    )

}

export default PersonalDataForm