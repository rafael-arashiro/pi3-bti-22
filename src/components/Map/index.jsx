import axios from "axios";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

import styles from './Map.module.css';

function ChangeView({ center }) {
  const map = useMap();
  map.setView(center, map.getZoom());
  return null;
}

function Map() {
  const [instituicoes, setInstituicoes] = useState([]);
  const [position, setPosition] = useState([-23.551, -46.633]);

  useEffect(() => {
    axios
      .get("https://pi3-bti-22-back.onrender.com/api/v1/instituicoes")
      .then((response) => {
        setInstituicoes(response.data);
      });
  }, []);

  function mudarMapa(lat, lng) {
    const latNum = parseFloat(lat)
    const lngNum = parseFloat(lng)
    setPosition([latNum, lngNum]);
  }

  return (
    <div className={styles.pageWrapper}>
      {/* Mapa dentro do novo wrapper */}
      <div className={styles.mapWrapper}>
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={true}
          className={styles.mapContainer}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>Localização selecionada</Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Lista de Instituições */}
      <h2 className={styles.pageTitle}>Instituições Cadastradas</h2>

      <ul className={styles.instituicaoList}>
        {instituicoes.map((instituicao) => (
          <li key={instituicao.id} className={styles.instituicaoItem}>
            <div className={styles.instituicaoTitle}>{instituicao.nome}</div>
            <div>Localização: ({instituicao.localx}, {instituicao.localy})</div>
            <div>Serviço: {instituicao.servico}</div>
            <button
              onClick={() => mudarMapa(instituicao.localx, instituicao.localy)}
              className={styles.mostrarMapaButton}
            >
              Mostrar no mapa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Map;
