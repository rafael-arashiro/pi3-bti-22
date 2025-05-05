import axios from "axios";
import { useEffect, useState } from "react";

function List() {
  const [instituicoes, setInstituicoes] = useState([]);

  useEffect(() => {
    axios.get("http://pi3-bti-22-back.onrender.com/api/v1/instituicoes").then((response) => {
      setInstituicoes(response.data);
    });
  }, []);

  if (instituicoes.length === 0)
    return <div>Nenhuma instituição cadastrada</div>;

  return (
    <div>
      <h2>Instituições Cadastradas</h2>
      <ul>
        {instituicoes.map((instituicao) => (
          <li key={instituicao.id}>
            <div>
              <b>{instituicao.nome}</b>
            </div>
            <div>
              Localização: ({instituicao.localx}, {instituicao.localy})
            </div>
            <div>Serviço: {instituicao.servico}</div>
            <div>
              <button>Buscar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
