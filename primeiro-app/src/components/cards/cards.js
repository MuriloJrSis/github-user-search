//listas com elemento react no return do callback do map precisa de uma prop key no elemento que é um identificador unico
//senao usar no console.log aparecera um erro te cobrando essa regra
//a prop key nao é passada como prop é so usada no contexto de listas renderizadas dinamicamente 

//import Card from '../card/card.js'
//const cardsTitle = ['Título do card 1', 'Título do card 2', 'Título do card 3']
//evento como prop funciona como um callback, 
// ja passa a funcao direto como prop, da um nome e o valor seria a funcao,  
// o atributo de evento se usa no componente que recebe essa funcao e voce chama a funcao

/*const showCardColor = () => {
    console.log('clicou')
}

const Cards = () => {
    
return (
    <div>
        <h2>Meus cards</h2>

        <div>
            {
                cardsTitle.map((cardsTitle, index) => (
                    <Card key={index} showCardColor={showCardColor}>
                        <h3>{cardsTitle}</h3>
                        <p>esse é um texto do card</p>
                    </Card>
                ))
            }
         <Card color='blue'> {/*NAO ERA PRO EVENTO PEGAR AQUI E ALI EM KEY TAMBEM SE EU TIRO FUNCIONA E NAO TO PASSANDO COMO PROP, PRECISA USAR SEPARADO NO COMPONENTE CARD, AQUI TA PEGANDO MESMO ESCOPO*/ }
           /*     <h3>esse é um fundo azul</h3>
                <p>esse é um texto do card azul</p>
            </Card>
        </div>
    </div>
    )
}
*/
//export { Cards, Card }