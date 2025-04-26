import axios from "axios";
import { useState } from "react";

function Form() {
  const categories = ["Cultura", "Educação", "Esporte", "Saúde"];

  const [formData, setFormData] = useState({
    nome: "",
    localx: "",
    localy: "",
    servico: "-",
  });

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post(
        "http://localhost:3000/api/v1/instituicoes",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        alert("Dados enviados com sucesso:", response.data);

        setFormData({
          nome: "",
          localx: "",
          localy: "",
          servico: "-",
        });
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome da Instituição</label>
          <input
            type="text"
            name="nome"
            placeholder="Digite o nome da instituição"
            required
            value={formData.nome}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Local X</label>
          <input
            type="text"
            name="localx"
            placeholder="Digite a coordenada x da instituição"
            required
            value={formData.localx}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Local Y</label>
          <input
            type="text"
            name="localy"
            placeholder="Digite a coordenada y da instituição"
            required
            value={formData.localy}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Tipo de serviço</label>
          <select
            name="servico"
            value={formData.servico}
            onChange={handleChange}
            required
          >
            <option value="-">Selecione um serviço</option>
            {categories.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </section>
  );
}

export default Form;
