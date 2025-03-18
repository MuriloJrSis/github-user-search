
/*
const Card = ({title}) => {
    return (
        <div>
            <h3>{title}</h3>
        </div>
    )
}

export default Card
*/

/*react nao renderiza objetos diretamente no jsx como {props}, mas a propriedade dele sim
somente assim para ler objetos {JSON.stringify(meuObjeto)}
podemos passar como props varios tipos de dados como: strings, 
booleanos, numeros, arrays, objetos mas acessando sua propriedade, 
funcao callback no uso de eventos, 

//Internamente, isso acontece ao usar destructing de objetos
const title = props.title; 

//sem o destructing 
(props)
{props.title}
*/
/*
const Card = (props) => {
    return (
        <div style={{ backgroundColor: props.color || 'red' }} onClick={()=>showCardColor()}>
         {props.children}
        </div>
        
    )
}

/*

evento no componente eu nao chamo a funcao 
apenas uso como valor, ja no evento como prop eu 
preciso chamar  afuncao porque ?

*/


/*Card.defaultProps = {
    color: 'red'
}*/
// style inline é um objeto iniciado com um atributo no react e outro parenteses é para leitura de js
//export default Card

/*
aqui voce passa o tipo de dado como o conteudo para um container, wrappers ou layout, 
e seu conteudo pode variar e ser flexivel 
antes na props era a propriedade passada como um dado de atributo
pode conter um ou varios elementos e ate outros componentes.
a props serve pra customizar o componente com alguma acao, ou estilizacao
valores unicos, texto, numero ou configurações.

quando nao usar props?
quando o conteudo do componente nao precisa mudar, fixo, pouca ou nenhuma reutilização

quando usar props?
se precisar de varios componentes diferentes, apenas passa os dados diferentes por props children ou props
precisar definir informações especificas como atributos use props
precisar o conteudo pode variar completamente usar props.children

props.children
flexibilidade: use se voce tem um componente generico que nao sabe o que vai ter de conteudo dentro
depois voce passa.

props.children passa o conteudo do elemento, elementos filhos pra dentro do componente

*/

/*default props - propriedades padrao
se eu nao passar uma prop do elemento pro componente, ele inicializa com uma.
se voce passar ele sobrescreve
*/

/*
const Card = ({title='titulo do card'}) => {
    return <div>{title}</div>
}
*/

//ou pode fazer assim tambem: no parametro (props) e usar props.title || 'titulo do card'
//se o valor for undefined, null, '', 0  sera usado o valor padrao do operador logico 
//para evitar valor vazio '' substitua o || ou por ??
/*
nova versao do react nao me permitiu fazer esse codigo

Card.defaultProps = {
    title: 'Título do card',
    p: 'texto do card'
}
*/
//export default Card

