import "./userSearch.css";

/**
 * Componente para buscar usuários do GitHub
 * @param {Object} props
 * @param {string} props.userName - Nome de usuário digitado
 * @param {Function} props.setUserName - Atualiza o estado do nome do usuário
 * @param {Function} props.getUserData - Função para buscar os dados do usuário
 */
const UserSearch = ({ userName, setUserName, getUserData }) => {
  const handleInputChange = (event) => {
    setUserName(event.target.value);
  };

  const handleClick = () => {
    if (validateEmptyInput(userName)) return;
    getUserData(userName);
  };
  const handleKeyUp = (event) => {
    const key = event.key;
    const isEnterKeyPressed = key === "Enter";
    if (isEnterKeyPressed) {
      if (validateEmptyInput(userName)) return;
      getUserData(userName);
    }
  };

  /**
   * Valida se o campo de entrada está vazio
   * @param {string} userName
   * @returns {boolean} - Retorna true se o campo estiver vazio e exibe um alerta
   */
  const validateEmptyInput = (userName) => {
    if (userName.trim().length === 0) {
      alert("Preencha o campo com o nome do usuário do GitHub");
      return true;
    }
  };

  return (
    <header>
      <h2>Buscar Usuário</h2>
      <input
        type="text"
        id="input-search"
        placeholder="Digite o nome do usuário no GitHub"
        onChange={handleInputChange}
        value={userName}
        onKeyUp={handleKeyUp}
      />
      <input
        type="button"
        value="Buscar"
        id="btn-search"
        onClick={handleClick}
      />
    </header>
  );
};

export default UserSearch;
