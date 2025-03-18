import Card from '../card/card'

const cardsTitle = ['Título do card 1', 'Título do card 2', 'Título do card 3'] 

const Cards = () => {
    return (
        <div>
            <h2>Meus cards</h2>

            <div>
                {
                    cardsTitle.map((cardsTitle, index) => (
                        <Card key={index}>
                            <h3>{cardsTitle}</h3>
                            <p>esse é um texto do card</p>
                        </Card>
                    ))   
                }
            </div>
        </div>
    )
}

export default Cards

//Listas no react com array, map, prop key 