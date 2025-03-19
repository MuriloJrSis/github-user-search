import "./profileData.css";

/**
 * Componente que exibe os dados do usuário e seus repositórios
 * @param {Object} props
 * @param {Object|null} props.user - Dados do usuário do GitHub
 * @param {boolean} props.notFound - Indica se o usuário foi encontrado
 */
const ProfileData = ({ user, notFound }) => {
  if (notFound) return <h3>Usuário não encontrado</h3>;

  if (!user || !user.userName) return null; // Evita renderização se os dados não existirem

  return (
    <div className="profile-data">
      <div className="info">
        <img src={user.avatarUrl} alt="Foto de perfil do usuário" />
        <div className="data">
          <h1>{user.name || "Não possui nome cadastrado"}</h1>
          <p>{user.bio || "Não possui bio cadastrada"}</p>
        </div>
      </div>

      {user.repositories.length > 0 && (
        <div className="repositories section">
          <h2>Repositórios</h2>
          <ul>
            {user.repositories.map((repo) => (
              <li key={repo.id}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileData;
