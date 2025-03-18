import './App.css'
import Button from './components/button/button.js'
import Button2 from './components/button2/button2.js'
import Button3 from './components/button3/button3.js'
import Card from './components/card/card.js'
import Card2 from './components/card2/card2.js';
import Card3 from './components/card3/card3.js'
import Cards from './components/cards/cards.js';
import Cards2 from './components/Cards2/cards2.js'
import DeckOfCards from './components/deck-of-cards/deck-of-cards.js'

function App() {
  return (
   <>
    <Button/>
    <Button2 />
    <Button3/>
    <Card2 title='Título Card 1'/>
    <Card>
      <h3>Título do card 2</h3>
      <p>esse é um texto do card 2</p>
    </Card>
    <Card3>    
      <h3>Título do card 3</h3>
      <p>esse é um texto do card 3</p>
    </Card3>
    <Cards/>
    <Cards2/>
    <DeckOfCards/>
    </>
  );
}

export default App;
  
