import './index.css';
import Die from "./components/Die"
import { useState } from 'react';


export default function App() {
  const [dice, setDice] = useState(allNewDice())
  function allNewDice(){
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push({
          value: Math.ceil(Math.random() * 6), 
          isHeld: false
      })
  }
    return newDice
  }

  function rollDice(){
    setDice(allNewDice())
  }

  const diceElements = dice.map(die => <Die value={die.value} />)

  return (
      <main>
          <div className="dice-container">
              {diceElements}
          </div>
          <button className="roll-dice" onClick={rollDice}>Roll</button>
      </main>
  )
}
