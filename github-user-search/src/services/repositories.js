import { baseUrl, respositoriesQuantity } from '../variables/variables'

/**
 * Busca os repositórios públicos do usuário no GitHub
 * @param {string} userName - Nome de usuário do GitHub
 * @returns {Promise<Array>} - Retorna uma lista de repositórios ou um array vazio em caso de erro
 */
const getRepositories = async (userName) => {
    try{
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${respositoriesQuantity}`)
    if (!response.ok) throw new Error(`Erro: ${response.status} - ${response.statusText}`)
    return await response.json()
    } catch (error) {
        console.error('Erro ao buscar repositórios:', error)
        return [];
    }
}

export default getRepositories

