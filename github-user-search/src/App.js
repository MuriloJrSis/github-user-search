import { useState } from 'react';
import Icon from './components/icon/icon.js'
import './css/reset.css'
import './css/styles.css'
import UserSearch from './components/userSearch/userSearch.js';
import ProfileData from './components/profileData/profileData.js';
import getUser from './services/user.js';
import getRepositories from './services/repositories.js';

function App() {
  const [userName, setUserName] = useState('')
  const [user, setUser] = useState(null);

  const [notFound, setNotFound] = useState(false); // o usuario esta encontrado ou ainda nao vai fazer a busca com o valor booleano false

  //nao precisa de userName como argumento ?
  const getUserData = async () => {
    try {
    setNotFound(false) //muda o estado de true para false para uma nova busca de usuario valida
    const userResponse = await getUser(userName)
         //   console.log(userResponse)

    if(!userResponse || userResponse.message === "Not Found"){ //json so contem essa propriedade em casos de erro
        setNotFound(true) //usuario nao encontrado
        return
    }

  const repositoriesResponse = await getRepositories(userName)

  setUser({
    avatarUrl: userResponse.avatar_url,
    name: userResponse.name,
    bio: userResponse.bio,
    userName: userResponse.login,
    repositories: [] // 
  })
 //console.log(repositoriesResponse)
 
  setUser(prevUser => ({
    ...prevUser,
    repositories: repositoriesResponse || []// Adiciona repositórios ao estado do usuário que estava inicializa vazia se a reposta da api for null, undefined, falsy exibira o array vazio para evitar erros no user.repostories.map de "Cannot read properties of null (reading 'map')"
  }));
} catch (error) {
  console.error('Erro ao obter dados do usuário:', error)
}
  }

  return (
   <main>
   <Icon />
   <section className='container'>
   < UserSearch userName={userName} setUserName={setUserName} setNotFound={setNotFound} getUserData={getUserData}/>
   < ProfileData user={user} notFound={notFound} />
   </section>
   </main>
  );
}

export default App;
  

/*parenteses é para quebra de linha
porque usar jsx porque evita menos codigo complexo ele converte pra mim?
porque usar arrowfunction é so porque é sintaxe curta menos verbosa?
porque usar classe e seletor é porque vou codificar externo separando ?
link css nao foi importado no index.html so por aqui
ANOTE O BASIQUINHO QUE ELE PASSOU SE QUISER DO CREATE REACT APP DO GERENCIADOR DE PROJETOS ETC
VOLTE AO ASSUNTO SE NAO TE DEIXAR ANSIOSO OS QUE VOCE PULOU JSX ELEMENTO ESSAS COISAS
*/


/*prop sao propriedades, uma forma de passar informações pros elementos para dentro do componente
pra alterar alguma caracteristica dele

props.title voce esta acessando a propriedade title do objeto props
ai assim imprime o valor de title

destrutcting voce ja entra direto na chave na propredade do objeto diretamente nao precisa passar pelo objeto inteiro props.title ja apenas title

this.props é um objeto literal {chave:valor} que contem as propriedades passadas pros componentes
this é a instancia da classe card é o objeto da classe card {chave:valor}

Card {
  props: { titulo: "Meu Card" },
}

props é um objeto com pares de chave e valor deentro de objeto com par de chave e valor
props é um subobjeto do objeto card
this.props ou seja card.props

this.props significa "dentro da instância do componente Card, acesse o subobjeto props".
*/

/*
const { nome, idade } = pessoa; // Desestruturação

console.log(nome);  // "Carlos" (não precisa mais de pessoa.nome)
console.log(idade); // 30  nesse exemplo onde que ta atribuicao do valor carlos e 30 ? 

*/

