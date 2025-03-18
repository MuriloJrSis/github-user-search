import './profileData.css'

const ProfileData = ({ user, notFound }) => {
    if (notFound) return <h3>Usuário não encontrado</h3>;

    if (!user || !user.userName) return null

    return (
    <div className="profile-data"> 
        <div className="info">
                        <img src={user.avatarUrl} alt="Foto de perfil do usuário" />
                        <div className="data">
                            <h1>{user.name || 'Não possui nome cadastrado'}</h1>
                            <p>{user.bio || 'Não possui bio cadastrada'}</p>
                        </div>
            </div>

            {user.repositories.length > 0 && (
                        <div className="repositories section">
                            <h2>Repositórios</h2>
                            <ul>
                                {user.repositories.map(repo => (
                                    <li key={repo.id}>
                                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                            {repo.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
    </div>
    )
}

export default ProfileData








/* quando um componente ou parte dele deve ou nao serem redenrizaro 


se true é renderizado se falso nao

 quando so tem o if se for verdadeiro ele nao executa o falso e se for falso ele nao entra no if e ja passa pra proxima linha
*/


/* import './profileData.css';

const ProfileData = ({ user, notFound }) => {
    if (notFound) {
        return <h3>Usuário não encontrado</h3>;
    }

    if (!user.userName) {
        return <h3>Informações do usuário serão exibidas aqui</h3>;
    }

    // Exibe os dados do usuário
    return (
        <div className="profile-data">
            <img src={user.avatarUrl} alt="Avatar" />
            <h3>{user.name}</h3>
            <p>{user.bio}</p>
            <h4>Repositórios:</h4>
            <ul>
                {user.repositories.map((repo, index) => (
                    <li key={index}>{repo.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProfileData;
 */