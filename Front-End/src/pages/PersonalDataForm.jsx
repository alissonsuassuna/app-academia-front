import React, { useState } from "react";
import CenterContainer from '../components/CenterContainer'
import InputPattern from "../components/InputPattern";

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
        <div className="min-h-screen bg-zinc-400 flex items-center justify-center">
            <div className="flex w-max">
                <CenterContainer title="Dados pessoais do cliente">
                <form onSubmit={testeForm}>
                <InputPattern
                    label="Nome:"
                    type="text"
                    name="name"
                    onChange={mudou}
                    value={formDate.name}
                    placeholder="Nome do aluno"
                />
                <InputPattern
                    label="Altura:"
                    type="number"
                    max="3"
                    step="0.01"
                    min="0"
                    name="height"
                    onChange={mudou}
                    value={formDate.height}
                    placeholder="Altura"
                />
                <InputPattern
                    label="Peso:"
                    type="number"
                    max="300"
                    step="0.1"
                    min="0"
                    name="weight"
                    onChange={mudou}
                    value={formDate.weight}
                    placeholder="Peso"
                />
                <InputPattern
                    label="Circunferência Cintura:"
                    type="number"
                    max="200"
                    step="1"
                    min="10"
                    name="cc"
                    onChange={mudou}
                    value={formDate.cc}
                    placeholder="Cintura"
                />
                <InputPattern
                    label="Circunferência Quadril:"
                    type="number"
                    max="200"
                    step="1"
                    min="20"
                    name="cq"
                    onChange={mudou}
                    value={formDate.cq}
                    placeholder="Quadril"
                />
                    <button type="submit"
                    className="bg-purple-500 text-white py-2 px-4 rounded mt-6 w-96 text-xl font-semibold">
                        Salvar Dados
                    </button>
                </form>
                </CenterContainer>
                <CenterContainer title="Cálculos informativos ">
                <div className="flex flex-col py-4 gap-4">
                    <div className="flex gap-3 justify-center">
                        <h2 className="text-xl">IMC:</h2>
                        <p className="text-md">
                            {imc?imc.toFixed(2):"Salve dados para exibir"}
                        </p>
                    </div>
                    <div className="flex gap-2 justify-center">
                        <h2 className="text-xl">RCQ:</h2>
                        <p className="text-md">
                            {rcq?rcq.toFixed(2):"Salve dados para exibir"}
                        </p>
                    </div>
                </div>
                </CenterContainer>
            </div>
        </div>





    )
}

export default PersonalDataForm