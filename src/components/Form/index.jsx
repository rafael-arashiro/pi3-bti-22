import axios from "axios";
import { useState } from "react";
import styles from './Form.module.css';
import { FaBuilding, FaMapMarkerAlt, FaMapSigns } from 'react-icons/fa'; // Ícones!

function Form() {
  const categories = ["Cultura", "Educação", "Esporte", "Saúde"];

  const [formData, setFormData] = useState({
    nome: "",
    endereco: "",
    cidade: "",
    estado: "",
    servico: "-",
  });

  const [message, setMessage] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://pi3-bti-22-back.onrender.com/api/v1/instituicoes", formData, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        setMessage({ type: 'success', text: "Instituição cadastrada com sucesso!" });
        setFormData({
          nome: "",
          endereco: "",
          cidade: "",
          estado: "",
          servico: "-",
        });
      })
      .catch(() => {
        setMessage({ type: 'error', text: "Erro ao cadastrar instituição!" });
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
    <section className={styles.pageSection}>
      <div className={styles.formContainer}>
        
      <img 
  src="/assets/undraw_sharing-knowledge_pu0e.svg" 
  alt="Compartilhando Conhecimento" 
  className={styles.illustration}
/>

        <h2 className={styles.formTitle}>Cadastrar Nova Instituição</h2>

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
              value={formData.nome}
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
              value={formData.endereco}
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
              value={formData.cidade}
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
              value={formData.estado}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label><FaMapSigns /> Tipo de serviço</label>
            <select
              name="servico"
              value={formData.servico}
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
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  );
}

export default Form;
