import { useState } from "react";
import Icon from "./components/icon/icon.js";
import "./css/reset.css";
import "./css/styles.css";
import UserSearch from "./components/userSearch/userSearch.js";
import ProfileData from "./components/profileData/profileData.js";
import getUser from "./services/user.js";
import getRepositories from "./services/repositories.js";

function App() {
  // Estado para armazenar o nome do usuário digitado
  const [userName, setUserName] = useState("");
  // Estado para armazenar os dados do perfil do usuário obtidos da API do github (nome, bio, repositorios, foto de perfil)
  const [user, setUser] = useState(null);
  // Estado para controlar se o usuário foi encontrado ou não
  const [notFound, setNotFound] = useState(false);

  /**
   * Obtém os dados do usuário e seus repositórios a partir da API do GitHub
   */
  const getUserData = async () => {
    try {
      setNotFound(false); // Reseta o estado "notFound" para false antes de fazer uma nova busca

      // Busca os dados do perfil do usuário da API do github
      const userResponse = await getUser(userName);

      // Se o usuário não for encontrado, define o estado e interrompe a execução
      if (!userResponse || userResponse.message === "Not Found") {
        setNotFound(true);
        return;
      }

      // Busca os repositorios da API do github
      const repositoriesResponse = await getRepositories(userName);

      // Atualiza o estado com os dados do usuário
      setUser({
        avatarUrl: userResponse.avatar_url,
        name: userResponse.name,
        bio: userResponse.bio,
        userName: userResponse.login,
        repositories: [], // Inicializa a lista de repositórios como vazia
      });

      // Atualiza o estado para adicionar os repositórios ao usuário, mantendo os dados anteriores
      setUser((prevUser) => ({
        ...prevUser,
        repositories: repositoriesResponse || [], // Garante um array vazio caso a resposta da API github seja invalida como: null, undefined, falsy, para evitar erros no user.repostories.map como: "Cannot read properties of null (reading 'map')"
      }));
    } catch (error) {
      console.error("Erro ao obter dados do usuário:", error);
    }
  };

  return (
    <main>
      <Icon />
      <section className="container">
        <UserSearch
          userName={userName}
          setUserName={setUserName}
          setNotFound={setNotFound}
          getUserData={getUserData}
        />
        <ProfileData user={user} notFound={notFound} />
      </section>
    </main>
  );
}

export default App;
