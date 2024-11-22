import React, { useState } from "react";

function PersonalDataForm() {

    const [formDate, setFormDate] = useState({
        name: '',
        height: '',
        weight: '',
        cc:'',
        cq:''
    })

    // Definições de medidas e cálculos
    const [imc, setImc] = useState(null)
    const [rcq, setRcq] = useState(null)

    const imcCalc = (weight, height) => {
        return weight/(height*height)
    }
    const rcqCalc = (cc, cq)=>{
        return cc/cq
    }

    // Alterações no preenchimento de variáveis
    const mudou = (event) => {
        setFormDate({ ...formDate, [event.target.name]: event.target.value})

        //Apaga o valores durante a edição
        setImc(null)
        setRcq(null)
        console.log(event.target.type)
    }
    

    const testeForm = (event) => {
        event.preventDefault()
        console.log(formDate)
        setImc(imcCalc(formDate.weight, formDate.height))
        setRcq(rcqCalc(formDate.cc, formDate.cq))
    }

    return (
        <section>
            <h1> Dados pessoais do cliente</h1>

            <form onSubmit={testeForm}>
                <label>Nome:</label>
                <input type="text" 
                    name="name" 
                    onChange={mudou}
                    value={formDate.name}
                    placeholder="Nome do aluno"/>

                <label>Altura:</label>
                <input type="number" 
                    max="3"  
                    step="0.01" 
                    min="0" 
                    name="height" 
                    onChange={mudou} 
                    value={formDate.height} 
                    placeholder="Altura"
                />
                <label>Peso:</label>
                <input type="number" 
                    max="300"  
                    step="0.1" 
                    min="0" 
                    name="weight" 
                    onChange={mudou} 
                    value={formDate.weight} 
                    placeholder="Peso"
                />
                <label>Circunferência Cintura:</label>
                <input type="number" 
                    max="200"  
                    step="1" 
                    min="10" 
                    name="cc" 
                    onChange={mudou} 
                    value={formDate.cc} 
                    placeholder="Cintura"
                />
                <label>Circunferência Quadril</label>
                <input type="number" 
                    max="200"  
                    step="1" 
                    min="20" 
                    name="cq" 
                    onChange={mudou} 
                    value={formDate.cq} 
                    placeholder="Quadril"
                />
                <button type="submit">Salvar Dados</button>
            </form>

            {/* Resultado */}
            <div>
                <h2> Seu IMC é:</h2>
                <p>{imc?imc.toFixed(2):"Salve dados para exibir"}</p>
            </div>
            <div>
                <h2> Seu RCQ é:</h2>
                <p>{rcq?rcq.toFixed(2):"Salve dados para exibir"}</p>
            </div>
        </section>
    )
}

export default PersonalDataForm