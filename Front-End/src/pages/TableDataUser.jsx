import React from "react";

function TableDataUser({ dadosCalculo }) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-center text-blue-500 mb-4">
        Tabela: Fórmulas de Jackson-Pollock
      </h2>
      <table className="table-auto w-full border-collapse border border-gray-300 text-sm text-center">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Sexo</th>
            <th className="border border-gray-300 px-4 py-2">Fórmula</th>
          </tr>
        </thead>
        <tbody>
          {dadosCalculo.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{item.sexo}</td>
              <td className="border border-gray-300 px-4 py-2">{item.formula}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableDataUser;