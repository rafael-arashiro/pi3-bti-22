const apiUrl = import.meta.env.VITE_API_URL;

export async function getInstituicoes() {
  const response = await fetch(`${apiUrl}/api/v1/instituicoes`);
  if (!response.ok) {
    throw new Error('Erro ao buscar instituições');
  }
  return response.json();
}

export default apiUrl;
