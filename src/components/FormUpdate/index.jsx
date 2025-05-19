import axios from "axios";
import { useEffect, useState } from "react";
import styles from './FormUpdate.module.css';
import { FaBuilding, FaMapMarkerAlt, FaMapSigns } from 'react-icons/fa'; // Ícones!
import { useParams } from "react-router-dom";

function FormUpdate() {

  const { id } = useParams()

  const [isLoading, setIsLoading] = useState(true);

  const [instituicao, setInstituicao] = useState({
    nome: "",
    cidade: "",
    estado: "",
    servico: "-",
  });

  useEffect(() => {
    axios.get(`https://pi3-bti-22-back.onrender.com/api/v1/instituicoes/${id}`)
      .then((response) => {
        setInstituicao(response.data);
      })
      .catch((error) => {
        console.error('Erro ao carregar instituição:', error);
        setMessage({ type: 'error', text: "Erro ao carregar dados da instituição" });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  const categories = ["Cultura", "Educação", "Esporte", "Saúde"];

  const [message, setMessage] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .patch(`https://pi3-bti-22-back.onrender.com/api/v1/instituicoes/${id}`, instituicao, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        setMessage({ type: 'success', text: "Instituição atualizada com sucesso!" });
      })
      .catch(() => {
        setMessage({ type: 'error', text: "Erro ao atualizar instituição!" });
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setInstituicao((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  if (isLoading) {
    return <div className={styles.formTitle}>Carregando...</div>;
  }

  return (
    <section className={styles.pageSection}>
      <div className={styles.formContainer}>
        
      <img 
  src="/assets/undraw_sharing-knowledge_pu0e.svg" 
  alt="Compartilhando Conhecimento" 
  className={styles.illustration}
/>

        <h2 className={styles.formTitle}>Atualizar Instituição</h2>

        {message && (
          <div className={`${styles.message} ${styles[message.type]}`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label><FaBuilding /> Nome da Instituição</label>
            <input
              type="text"
              name="nome"
              placeholder="Digite o nome da instituição"
              required
              value={instituicao.nome}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label><FaMapMarkerAlt /> Endereço</label>
            <input
              type="text"
              name="endereco"
              placeholder="Digite o endereço"
              required
              value={instituicao.endereco}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label><FaMapMarkerAlt /> Cidade</label>
            <input
              type="text"
              name="cidade"
              placeholder="Digite a cidade"
              required
              value={instituicao.cidade}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label><FaMapMarkerAlt /> Estado</label>
            <input
              type="text"
              name="estado"
              placeholder="Digite o estado"
              required
              value={instituicao.estado}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label><FaMapSigns /> Tipo de serviço</label>
            <select
              name="servico"
              value={instituicao.servico}
              onChange={handleChange}
              required
            >
              <option value="-">Selecione um serviço</option>
              {categories.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))}
            </select>
          </div>

          <button type="submit" className={styles.cadastrarButton}>
            Atualizar
          </button>
        </form>
      </div>
    </section>
  );
}

export default FormUpdate;
