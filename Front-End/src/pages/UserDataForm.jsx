import React, { useState } from "react";
import TableDataUser from "./TableDataUser";

function UserDataForm() {
  const [formData, setFormData] = useState({
    cintura: "",
    quadril: "",
    dobras: "",
    sexo: "masculino",
  });

  const [resultados, setResultados] = useState({
    rcq: null,
    dobras: null,
  });

  // Dados para o componente TableDataUser
  const dadosCalculo = [
    {
      sexo: "Masculino",
      formula:
        "495 / (1.10938 - 0.0008267 * DC + 0.0000016 * DC² - 0.0002574 * idade) - 450",
    },
    {
      sexo: "Feminino",
      formula:
        "495 / (1.0994921 - 0.0009929 * DC + 0.0000023 * DC² - 0.0001392 * idade) - 450",
    },
  ];

  // Atualizar os valores do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Calcular RCQ
  const calcularRCQ = () => {
    const { cintura, quadril } = formData;
    if (cintura && quadril) {
      const rcq = (cintura / quadril).toFixed(2);
      setResultados((prev) => ({ ...prev, rcq }));
    }
  };

  // Calcular Dobras Cutâneas com Jackson-Pollock
  const calcularDobras = () => {
    const { dobras, sexo } = formData;
    if (dobras) {
      const dobrasNum = parseFloat(dobras);
      let gorduraCorporal;

      if (sexo === "masculino") {
        gorduraCorporal = (
          495 /
            (1.10938 -
              0.0008267 * dobrasNum +
              0.0000016 * Math.pow(dobrasNum, 2) -
              0.0002574 * 25) -
          450
        ).toFixed(2);
      } else {
        gorduraCorporal = (
          495 /
            (1.0994921 -
              0.0009929 * dobrasNum +
              0.0000023 * Math.pow(dobrasNum, 2) -
              0.0001392 * 25) -
          450
        ).toFixed(2);
      }

      setResultados((prev) => ({ ...prev, dobras: gorduraCorporal }));
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center flex-col">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center text-blue-500">
          Cálculo RCQ e Dobras Cutâneas
        </h1>

        {/* Entrada de Cintura */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Cintura (cm):</label>
          <input
            type="number"
            name="cintura"
            value={formData.cintura}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </div>

        {/* Entrada de Quadril */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Quadril (cm):</label>
          <input
            type="number"
            name="quadril"
            value={formData.quadril}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </div>

        {/* Entrada de Dobras Cutâneas */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Dobras Cutâneas (mm):</label>
          <input
            type="number"
            name="dobras"
            value={formData.dobras}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </div>

        {/* Seleção de Sexo */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Sexo:</label>
          <select
            name="sexo"
            value={formData.sexo}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          >
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
        </div>

        {/* Botões */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={calcularRCQ}
            className="bg-blue-500 text-white py-2 px-4 rounded mr-2"
          >
            Calcular RCQ
          </button>
          <button
            onClick={calcularDobras}
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Calcular Dobras
          </button>
        </div>

        {/* Resultados */}
        {resultados.rcq !== null && (
          <div className="mt-6 text-center text-blue-600">
            <p>Relação Cintura-Quadril (RCQ): {resultados.rcq}</p>
          </div>
        )}

        {resultados.dobras !== null && (
          <div className="mt-6 text-center text-green-600">
            <p>Gordura Corporal: {resultados.dobras}%</p>
          </div>
        )}
      </div>

      {/* Tabela com informações de cálculo */}
      <TableDataUser dadosCalculo={dadosCalculo} />
    </div>
  );
}

export default UserDataForm;

