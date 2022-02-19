// Access to http://localhost:3000/week4/count/

import React, { VFC, useState, useEffect } from 'react'
import Wrapper from '~/components/Wrapper'
import View from '~/components/View'

const Count: VFC = () => {
  const [count ,setCount] = useState<number>(0)

  useEffect(() => {
    console.log(`${count}: render constantly`)
  })

  useEffect(() => {
    console.log(`${count}: render first`)
  }, [])

  useEffect(() => {
    console.log(`${count}: render when count up`)
  }, [count])

  return (
    <Wrapper>
      <h1>useEffect Sample App</h1>
      <View>{ count }</View>
      <button onClick={() => setCount(count + 1) }>
        +1
      </button>
    </Wrapper>
  )
}

export default Count
