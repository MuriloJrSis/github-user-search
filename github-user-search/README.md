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

## Desafios

 Esse código é um produto de uma conversão de um código JavaScript de uma video aula para a biblioteca React trazendo diversos desafios que foram fundamentais para o meu aprendizado, permitindo um melhor entendimento dos conceitos e funcionalidades do React. Aqui estão os principais desafios enfrentados e como os superei:

### 1. Transição de uma abordagem imperativa para declarativa

- **Desafio:** O código original que você forneceu utilizava uma abordagem imperativa para manipular o DOM. Isso significava que você estava fazendo tudo de forma manual, usando `getElementById`, `addEventListener`, e manipulando diretamente o DOM para atualizar a página. Em React, a abordagem é declarativa, ou seja, você descreve o que a UI deve fazer, e o React se encarrega de atualizar o DOM por conta própria, conforme o estado da aplicação muda.

- **Solução:** No React, eu precisei reorganizar o código para seguir esse modelo declarativo. Ao invés de manipular diretamente os elementos da página, como no JavaScript puro, eu criei componentes React que representam partes da UI. Cada componente pode ter seu próprio estado e pode renderizar sua parte da interface com base nesse estado. Por exemplo, criei o componente `userProfile` para renderizar as informações do usuário, e ele é automaticamente re-renderizado sempre que o estado do usuário muda. Isso simplifica muito a manutenção do código, pois a UI reflete automaticamente o estado sem que eu precise me preocupar em atualizar o DOM manualmente.

### 2. Gerenciamento de Estado

- **Desafio:** No código em JavaScript, não havia um gerenciamento centralizado do estado. As interações com o usuário e a exibição dos dados estavam misturadas, o que tornava difícil controlar as mudanças no estado da aplicação. À medida que a aplicação cresce, esse tipo de abordagem pode se tornar difícil de gerenciar. Em React, o gerenciamento de estado é um dos pilares principais, onde você mantém as variáveis que representam o estado da aplicação e garante que a interface seja atualizada quando esses valores mudam.

- **Solução:** Para resolver isso, eu implementei o gerenciamento de estado usando `useState` no React. Em vez de realizar operações no DOM diretamente, como o código original, os dados (como o nome do usuário e os repositórios) são armazenados em variáveis de estado no React. Quando o usuário faz uma busca, o estado é atualizado com os dados retornados da API, e a UI é automaticamente re-renderizada para refletir essas mudanças. Esse tipo de gerenciamento de estado ajuda a manter a aplicação organizada e facilita o rastreamento de quaisquer mudanças.

### 3. Modularização da Lógica de Busca e Exibição

- **Desafio:** No código original, a lógica de busca e a exibição de dados estavam concentradas em um único fluxo, o que dificultava a reutilização e a escalabilidade. Em React, é importante dividir a aplicação em pequenos componentes que sejam responsáveis por partes específicas da interface, como o formulário de busca e a exibição dos dados do usuário.

- **Solução:** Eu dividi a lógica em componentes React, como o componente `userSearch` para o formulário de pesquisa e o componente `userProfile` para mostrar as informações do usuário. Isso tornou o código mais modular e fácil de entender, além de permitir que eu reutilizasse esses componentes em diferentes partes do código, caso fosse necessário. A separação de responsabilidades em componentes ajuda a tornar a aplicação mais escalável e facilita a manutenção a longo prazo.

### 4. Manipulação de Eventos no React

- **Desafio:** O código original utilizava `addEventListener` para associar eventos aos elementos do DOM, como clicar no botão de busca ou pressionar a tecla "Enter" para realizar uma pesquisa. Em React, a forma de manipular eventos é diferente. Ao invés de usar métodos como `addEventListener`, você associa diretamente os eventos aos elementos JSX usando as propriedades do React, como `onClick` e `onKeyUp`.

- **Solução:** Para adaptar os eventos para React, substituí as chamadas a `addEventListener` pelos manipuladores de eventos no JSX. Por exemplo, o evento de clique no botão de busca foi substituído pelo atributo `onClick` do React, e a escuta para a tecla "Enter" foi substituída pelo `onKeyUp`. Essa abordagem no React é mais declarativa e simplifica o código, pois os eventos estão diretamente ligados aos componentes que manipulam os dados e a interface do usuário.

---

## Aprendizados

1. **Adaptação para uma abordagem declarativa:** Aprendi como o React adota uma abordagem declarativa para a construção de interfaces de usuário, o que facilita muito a manutenção e escalabilidade da aplicação. Ao invés de gerenciar diretamente o DOM, agora eu trabalho com componentes e estado, e o React se encarrega de atualizar a UI de forma eficiente.

2. **Uso do `useState` para gerenciamento de estado:** A introdução do `useState` foi uma das partes mais desafiadoras, mas também mais gratificantes. Agora, posso gerenciar de forma clara e controlada os dados da aplicação, e a interface reflete automaticamente as mudanças quando o estado é alterado, sem precisar mexer diretamente no DOM.

3. **Divisão em componentes:** A ideia de dividir a aplicação em componentes independentes e reutilizáveis é um grande aprendizado. Isso me ajuda a escrever um código mais modular, onde cada parte tem uma responsabilidade clara. Além disso, facilita a reutilização de partes da aplicação em diferentes contextos.

4. **Manejo de eventos no JSX:** A transição de manipulação de eventos de uma forma procedural (usando `addEventListener`) para a forma declarativa do React foi um aprendizado importante. Aprendi a associar eventos diretamente nos componentes JSX, o que torna o código mais limpo e fácil de entender.

5. **Manutenção e escalabilidade:** Ao trabalhar com React, compreendi como a modularização e o gerenciamento de estado são fundamentais para criar aplicações escaláveis e de fácil manutenção. À medida que a aplicação cresce, a estrutura declarativa do React facilita muito a adição de novos recursos sem que o código fique desorganizado.

## Autor

**Murilo Júnior**  

- [GitHub](https://github.com/MuriloJrSis)  
- [LinkedIn](https://www.linkedin.com/in/murilojr-sis)  

---

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).

