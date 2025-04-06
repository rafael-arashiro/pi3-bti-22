import axios from "axios";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function Map() {
  const [instituicoes, setInstituicoes] = useState([]);
  const [position, setPosition] = useState([-23.551, -46.633]); // Posição inicial

  useEffect(() => {
    axios.get("pi3-bti-22-back.vercel.app/api/v1/instituicoes").then((response) => {
      setInstituicoes(response.data);
    });
  }, []);

  function mudarMapa(x, y) {
    setPosition([x, y]);
  }

  return (
    <>
      <div>
        {/* Mapa */}
        <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
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
                <button
                  onClick={() =>
                    mudarMapa(instituicao.localx, instituicao.localy)
                  }
                >
                  Mostrar no mapa
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Map;
