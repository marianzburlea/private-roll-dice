import React from 'react'
import { StyledRollWrapper, StyledRollButton } from './roll.style'

const Roll = ({ handleOnClick }) => {
  return (
    <StyledRollWrapper>
      <StyledRollButton onClick={handleOnClick}>
        ROLL
      </StyledRollButton>
    </StyledRollWrapper>
  )
}

export { Roll }