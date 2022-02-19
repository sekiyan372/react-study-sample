// Access to http://localhost:3000/week4/loop/

import React, { VFC, useState, useEffect } from 'react'
import Wrapper from '~/components/Wrapper'
import View from '~/components/View'

const Loop: VFC = () => {
  const [count1 ,setCount1] = useState<number>(0)
  const [count2, setCount2] = useState<number>(0)

  /* 無限ループ注意 */
  // useEffect(() => {
  //   setCount1(count1 + 1)
  // })

  useEffect(() => {
    setCount2(count2 + 1)
  }, [count1])

  /* 無限ループ注意 */
  // useEffect(() => {
  //   setCount2(count2 + 1)
  // }, [count2])

  return (
    <Wrapper>
      <h1>useEffect Bad Sample App</h1>

      <View>{ count1 }</View>
      <View>{ count2 }</View>

      <button onClick={() => setCount1(count1 + 1) }>
        +1
      </button>
    </Wrapper>
  )
}

export default Loop
