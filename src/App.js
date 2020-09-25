import React, { useState, useEffect } from "react";
import "./styles.css";

function buscaDados() {
  const url = "https://servicodados.ibge.gov.br/api/v2/censos/nomes";
  return fetch(url)
    .then(async (response) => await response.json())
    .then(async (dados) => {
      return await dados;
    })
    .catch((err) => console.error("Erro ao buscar dados", err));
}

export default function App() {
  const [casos, setCasos] = useState([]);
  useEffect(() => {
    buscaDados().then((dados) => setCasos(dados));
  }, []);
  return (
    <div id="tudo">
      <div className="container">
        <h3 id="idt">INFORMAÇÕES SOBRE NOMES</h3>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Nome </th>
              <th>Região </th>
              <th>Frequencia </th>
              <th>Rank </th>
            </tr>
          </thead>
          <tbody>
            {casos.map(function (item, index) {
              return (
                <tr key={index}>
                  <td>{item.nome}</td>
                  <td>{item.regiao}</td>
                  <td>{item.freq}</td>
                  <td>{item.rank}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
