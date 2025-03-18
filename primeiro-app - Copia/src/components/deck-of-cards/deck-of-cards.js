import { useState } from "react"

const DeckOfCards = () => {
 
   const [deck, setDeck] = useState(
        'mueilo'
    )

    return(
        <section>
            <ul>
              {console.log(deck, setDeck('lucica'))}
            </ul>
        </section>
    )
}

export default DeckOfCards

//retorna um array de duas posicoes uma variavel e um metodo  que atualiza a propriedade
//set é convencao é definir ou setar que vai atualizar a variavel


//const useStateReturn = useState({ cards: [] }); // Retorna um array com 2 valores, elementos
//const deck = useStateReturn[0];  estado atual: { cards: [] }
//const setdeck = useStateReturn[1]; funcao para atualizar o estado  

/* forma simplificada

const deck = useState({ cards: [] })[0];
const setDeck = useState({ cards: [] })[1];

e a desestruturaçao ???
*/

/*

 function meuMap(deck.cards, (card, index)) {
  let novoArray = []; // Criamos um novo array vazio

  for (let i = 0; i < deck.cards.length; i++) { // Percorre o array original
  let card = deck.cards[i]  
  let resultado = (card, index)(card[i], i); // Chama a funcao passando o item, índice
    novoArray.push(return); // Adiciona o valor retornado no novo array
  }
  return novoArray; // Retorna o novo array transformado
}

*/


