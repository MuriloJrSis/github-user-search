import './card3.css'

const Card3 = ({children, color='orange', showCardColor}) => {
    return (
        <div className='card3' style={{ backgroundColor: color }} onClick={()=> showCardColor(color)}  >
            {children}
        </div>
    )
}

export default Card3

//evento como prop de funcao(passando o evento desse componente para outro)
//o evento espera uma funcao sem parenteses que seria a referencia da funcao, a definicao de funcao para armazenar no react e depois chamar a funcao ao clicar ou pode usar uma arrow function se precisar usar o parametro para passar um argumento porque ja que ele espera uma funcao e nao o retorno ela funciona fica armazenada e quando voce clicar ela executa a funcao passa o argumento e retorna o valor 
// se o evento tiver uma funcao com parenteses ele chama assim que o componente é renderizado antes do evento , e assim o react dara erro mostrando que nao é uma funcao porque ele espera a funcao e nao o retorno, ou pode retornar undefine senao tiver um retorno definido na funcao chamada