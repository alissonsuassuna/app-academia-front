import React, { useState } from "react";

function UserDataForm() {
  // Estado para armazenar os dados do usuário
  const [cintura, setCintura] = useState("");
  const [quadril, setQuadril] = useState("");
  const [dobras, setDobras] = useState("");
  const [resultadoRCQ, setResultadoRCQ] = useState(null);
  const [resultadoDobras, setResultadoDobras] = useState(null);

  // Função para calcular a Relação Cintura-Quadril (RCQ)
  const calcularRCQ = () => {
    if (cintura && quadril) {
      const resultado = (cintura / quadril).toFixed(2);
      setResultadoRCQ(resultado);
    }
  };

  // Função para calcular as Dobras Cutâneas
  const calcularDobras = () => {
    if (dobras) {
      setResultadoDobras(dobras);
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center text-blue-500">Cálculo RCQ e Dobras Cutâneas</h1>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Cintura (cm):</label>
          <input
            type="number"
            value={cintura}
            onChange={(e) => setCintura(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Quadril (cm):</label>
          <input
            type="number"
            value={quadril}
            onChange={(e) => setQuadril(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Dobras Cutâneas (mm):</label>
          <input
            type="number"
            value={dobras}
            onChange={(e) => setDobras(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded"
          />
        </div>

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

        {resultadoRCQ !== null && (
          <div className="mt-6 text-center text-blue-600">
            <p>Relação Cintura-Quadril (RCQ): {resultadoRCQ}</p>
          </div>
        )}

        {resultadoDobras !== null && (
          <div className="mt-6 text-center text-green-600">
            <p>Dobras Cutâneas: {resultadoDobras} mm</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserDataForm;