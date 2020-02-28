import React from 'react'
import { StyleApp } from './app.style'
import { Title } from '../title'
import { DiceList } from '../dice-list'

const RollDiceApp = () => {

  return (
    <StyleApp>
      <Title titleText="Roll the dice please" />
      <DiceList />
    </StyleApp>
  )
}

export { RollDiceApp }
