import React, { useState } from "react"
import './index.css';
import Die from "./components/Die"
import {nanoid} from "nanoid"

export default function App() {
      const [dice, setDice] = useState(allNewDice())
      
      function allNewDice() {
          const newDice = []
          for (let i = 0; i < 10; i++) {
              newDice.push({
                  value: Math.ceil(Math.random() * 6),
                  isHeld: false,
                  id: nanoid()
              })
          }
          return newDice
      }
      
      function rollDice() {
          setDice(allNewDice())
      }
      
      function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
      }
      
      const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
        />
    ))
      
    return (
      <main>
          <div className="dice-container">
              {diceElements}
          </div>
          <button className="roll-dice" onClick={rollDice}>Roll</button>
      </main>
    )
  }