// Access to http://localhost:3000/week3/count/

import React, { VFC, useState } from 'react'
import styled from 'styled-components'
import Wrapper from '~/components/Wrapper'
import View from '~/components/View'

const Button = styled.button`
  font-size: 2rem;
  margin: 30px;
`

const Count: VFC = () => {
  const [num, setNum] = useState<number>(0)

  const handleClick = (value: number) => {
    setNum(num + value)
  }

  return (
    <Wrapper>
      <View>count number: {num}</View>

      <Button onClick={() => handleClick(1)}>+1</Button>

      <Button onClick={() => handleClick(10)}>+10</Button>
    </Wrapper>
  )
}

export default Count
