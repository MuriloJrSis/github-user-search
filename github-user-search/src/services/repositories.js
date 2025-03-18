import { baseUrl, respositoriesQuantity } from '../variables/variables'

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


//se a promise em dar um json porque tenho que converter