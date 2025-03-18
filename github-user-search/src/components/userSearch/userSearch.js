import './userSearch.css'

const UserSearch = ({userName, setUserName, getUserData}) => {

    const handleInputChange = (event) => {
        setUserName(event.target.value)
    }

    const handleClick = () => {
        if (validateEmptyInput(userName)) return //impede a execucao do console.log porque o texto é vazio
       // console.log(userName)
        getUserData(userName) //porque apagou o username ?
    }

    const handleKeyUp = (event) => {
        const key = event.key
        const isEnterKeyPressed = key === 'Enter'
        if (isEnterKeyPressed) {
        if (validateEmptyInput(userName)) return
            //juntar em uma condicional aqui no enter e no validate estudar ainda
        //console.log(event.target.value);
        getUserData(userName) //porque apagou username?
  }
    }

    const validateEmptyInput = (userName) => {
        if(userName.trim().length === 0) {
          alert('Preencha o campo com o nome do usuário do GitHub')
        return true //interrompe o handleclick nao executa o consolelog
        }
        
    }

    return (
        <header>
            <h2>Buscar Usuário</h2>
            <input type="text" id="input-search" placeholder="Digite o nome do usuário no GitHub" onChange={handleInputChange} value={userName} onKeyUp={handleKeyUp} />
            <input type="button" value="Buscar" id="btn-search" onClick={handleClick}/>
        </header> 
    )
}

export default UserSearch

