import { baseUrl } from '../variables/variables'

const getUser = async (userName) => {
    try{
    const response = await fetch(`${baseUrl}/${userName}`)
    if (!response.ok) throw new Error(`Erro: ${response.status} - ${response.statusText}`)
    return await response.json()
} catch(error) {
    console.error("Erro ao buscar usuário:", error)
    return null;
}
}

export default getUser


//se a promise em dar um json porque tenho que converter