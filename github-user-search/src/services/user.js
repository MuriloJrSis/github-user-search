import { baseUrl } from "../variables/variables";

/**
 * Busca informações do usuário na API do GitHub
 * @param {string} userName - Nome de usuário do GitHub
 * @returns {Promise<Object|null>} - Retorna os dados do usuário ou null em caso de erro
 */
const getUser = async (userName) => {
  try {
    const response = await fetch(`${baseUrl}/${userName}`);
    if (!response.ok)
      throw new Error(`Erro: ${response.status} - ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    return null;
  }
};

export default getUser;
