//import { Cards, Card } from './components/card/card.js';
import Button from './components/button/button.js'


function App() {
  return (
   <>
  {/*<Card title='Titulo card'/>
    <Card>
      <h3>Título do card</h3>
      <p>esse é um texto dentro do card</p>
    </Card>
    <Cards />
    <Button label='clique aqui'/> */}
    <Button/>
   </>
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

