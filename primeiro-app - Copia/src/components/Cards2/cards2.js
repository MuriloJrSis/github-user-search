import Card3 from '../card3/card3'

const cardsTitle = ['Título do card 1', 'Título do card 2', 'Título do card 3'] 

const showCardColor = (color) => {
    console.log(color)
}

const Cards2 = () => {
    return (
        <div>
            <h2>Meus cards</h2>

            <div>
                {
                    cardsTitle.map((cardsTitle, index) => (
                        <Card3 key={index} showCardColor={showCardColor}>
                            <h3>{cardsTitle}</h3>
                            <p>esse é um texto do card</p>
                        </Card3>
                    ))   
                }

                        <Card3 color='blue' showCardColor={showCardColor}>
                            <h3>Card com fundo azul</h3>
                            <p>esse é um texto do card</p>
                        </Card3>
            </div>
        </div>
    )
}

export default Cards2

//funcao passando como prop para usar no evento