# GitHub User Search 🔍

É uma Aplicação web em React para buscar usuários do GitHub e exibir suas informaçoes de perfis incluindo nome, biografia, e repositórios públicos. O projeto consome a GitHub API, utilizando hooks como useState para gerenciamento dos estados.
Este projeto é ideal para praticar consumo de APIs, manipulação de dados no React e estilização com CSS.

## O que este projeto faz?

Este aplicativo permite que os usuários pesquisem perfis do GitHub pelo nome de usuário. Ao realizar a busca, ele exibe as seguintes informações sobre o perfil encontrado:

- Foto de perfil.
- Nome de exibição (quando disponível).
- Biografia (quando disponível).
- Número de repositórios públicos.
- Lista dos repositórios públicos com links para cada um.

A interface é intuitiva, responsiva e estilizada para oferecer uma boa experiência ao usuário.

## 🚀 Funcionalidades

- **Busca Dinâmica**: Digite o nome de usuário do GitHub para encontrar informações de forma rápida.

- **Detalhes do Perfil**: Exibição de informações detalhadas do perfil do usuário:
  - Nome
  - Bio
  - Repositórios públicos
  - Foto de perfil
- Listagem dos repositórios públicos do usuário com links diretos.

- **Interface com Estilização Moderna e Responsiva com CSS puro**: Funciona bem em dispositivos móveis e desktops. Possui uma Interface limpa com design atrativo.

- **Tratamento de erros para usuários nao encontrados**:

## Demonstração

[Link para o projeto ao vivo](https://github.com/MuriloJrSis/github-user-search)

## Prints

![Tela Inicial](src/assets/tela-inicial.png)
![Detalhes do Perfil](src/assets/detalhes-perfil.png)

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface do usuário.
- **Fetch API**: Para comunicação com a API do GitHub.
- **CSS Flexbox/Grid**: Para estilização e layout responsivo.
- **Devicon**: Ícones de tecnologia.
- **JavaScript (ES6+)**

## Pré-requisitos

- Node.js instalado
- Navegador atualizado

## Como Rodar o Projeto

## Como executar o projeto localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/MuriloJrSis/github-user-search.git
   ```

2. Navegue até a pasta do projeto:

   ```bash
   cd github-user-search-app
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie a aplicação:

   ```bash
   npm start
   ```

5. Acesse no navegador:
   [http://localhost:3000](http://localhost:3000)

### Estrutura de Projeto

- **github-user-search-app/**
  - **public/**: Arquivos públicos (favicon, index.html, etc.)
  - **src/**: Código-fonte do projeto
    - **components/**: Componentes reutilizáveis (icon, userSearch, profileData)
    - **styles/**: Arquivos de estilo (reset, styles)
    - **services/**: Arquivos de serviçoes (user, repositories)
    - **variables/**: Arquivo de variáveis(variables)
    - **App.js**: Componente principal
    - **index.js**: Ponto de entrada do React
    - Outros arquivos do projeto
  - **.gitignore**: Arquivos/pastas ignorados pelo Git
  - **package.json**: Dependências e scripts
  - **README.md**: Documentação do projeto

## API Utilizada

### GitHub API

**Documentação oficial:**  
[GitHub REST API](https://docs.github.com/en/rest)

**Endpoints utilizados:**

- **Buscar usuário:** [https://api.github.com/users/{username}](https://api.github.com/users/{username})
- **Listar repositórios:** [https://api.github.com/users/{username}/repos](https://api.github.com/users/{username}/repos)

## Desafios Enfrentados

Esse código é um produto de uma conversão de um código Html, Css e JavaScript de uma video aula para a biblioteca React, trazendo diversos desafios que foram fundamentais para o meu aprendizado, permitindo um melhor entendimento dos conceitos e funcionalidades do React. Aqui estão os principais desafios enfrentados e como os superei:

### 1. Estruturação do Projeto

A separação do código em componentes reutilizáveis foi um dos principais desafios. No código original, a lógica estava toda centralizada nos arquivos JavaScript, manipulando diretamente o DOM. Em React, precisei dividir as funcionalidades em componentes menores, como:

- `UserSearch`: Componente responsável pela entrada de dados e busca do usuário.

- `ProfileData`: Responsável por exibir os dados do usuário e seus repositórios.

- `Icon`: Exibe o ícone do GitHub.

- `App.js`: Componente principal que gerencia o estado da aplicação.

### 2. Gerenciamento de Estado

Em JavaScript puro, a manipulação de elementos do DOM era feita diretamente com `document.querySelector` e `innerHTML`. Em React, precisei gerenciar o estado com `useState`, garantindo que as mudanças na interface fossem refletidas corretamente.

- Criar estados para armazenar o nome do usuário digitado, os dados do perfil e a informação se o usuário foi encontrado.

- Atualizar o estado de forma assíncrona após chamadas à API do GitHub.

### 3. Consumo de API e Tratamento de Erros

No JavaScript puro, as chamadas `fetch` eram feitas sem tratamento robusto de erros. Durante a conversão para React:

Utilizei `async/await` para tornar o código mais legível.

Adicionei `try/catch` para capturar erros e evitar que falhas na API quebrem a aplicação.

Melhorei a validação de entrada para evitar requisições desnecessárias.

### 4. Manipulação de Eventos no React

No JavaScript puro, eventos eram manipulados diretamente com `addEventListener`. Em React, utilizei:

- `onChange` para capturar o que o usuário digita no input.

- `onClick` para acionar a busca do usuário.

- `onKeyUp` para permitir a busca ao pressionar Enter.

### 5. Estilização

O CSS foi mantido separado, mas ajustado para garantir compatibilidade com a estrutura de componentes.

 - Importei os estilos globais em App.js.

 - Mantive estilos específicos dentro de cada componente.

 - Evitei manipulação direta do DOM para aplicação de estilos dinâmicos.

---

## Aprendizados

1. **Componentização:** Separar o código em componentes menores tornou a manutenção mais fácil.

2. **Gerenciamento de Estado:** `useState` ajudou a atualizar a interface de forma dinâmica e eficiente..

3. **Boas práticas com APIs:**  Adicionar tratamento de erros melhorou a robustez do projeto.

4. **Manejo de Eventos no JSX:** Aprendi a lidar com eventos de forma declarativa e mais organizada, associando eventos diretamente nos componentes JSX, o que torna o código mais limpo e fácil de entender.

5. **Separar a lógica de renderização:** Com React, pude dividir melhor a lógica de negócio da camada de apresentação.

6. **Manutenção e escalabilidade:** À medida que a aplicação cresce, a estrutura declarativa do React facilita muito a adição de novos recursos sem que o código fique desorganizado.

Esta experiência foi valiosa para aprimorar minhas habilidades com React e melhorar minha compreensão sobre boas práticas na construção de aplicações front-end modernas.

## Autor

**Murilo Júnior**

- [GitHub](https://github.com/MuriloJrSis)
- [LinkedIn](https://www.linkedin.com/in/murilojr-sis)

---

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
