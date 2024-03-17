import { useState } from 'react';
import './style.scss'
import cover from '~/components/asset/img/cover.png'
const cardImages = [
    { "src": "~/components/asset/img/helmet-1.png"},
    { "src": "~/components/asset/img/potion-1.png"},
    { "src": "~/components/asset/img/ring-1.png"},
    { "src": "~/components/asset/img/scroll-1.png"},
    { "src": "~/components/asset/img/shield-1.png"},
    { "src": "~/components/asset/img/sword-1.png"},
]
function Game() {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)

    const shuffleCards = () =>{
        const shuffleCards = [...cardImages,...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({...card, id:Math.random() }))
        setCards(shuffleCards)
        setTurns(0)
    }
    return ( 
        <div className='game'>
            <div className="App">
                <h1>Magic Match</h1>
                <button onClick={shuffleCards}>New Game</button>

                <div className='card_grid'>
                    {cards.map(card => (
                        <div className='card' key={card.id}>
                            <div>
                                <img className='front'src={card.src} alt='card front'></img>
                                <img className='black' src={cover} alt='card back'> </img>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}

export default Game;