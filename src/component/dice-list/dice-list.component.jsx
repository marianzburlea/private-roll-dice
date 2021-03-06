import React, { useState } from 'react'
import { getDice } from '../../util'
import { Roll } from '../roll'
import { Dice } from '../dice'

const DiceList = () => {
  const [diceList, rollDice] = useState(getDice())
  const handleOnClick = () => {
    console.log('click button')
    rollDice(getDice())
  }
  return [
    ...diceList.map((dice, nam) => <Dice key={nam}>{dice}</Dice>),
    <Roll key="button" handleOnClick={handleOnClick} />
  ]
}

export { DiceList }