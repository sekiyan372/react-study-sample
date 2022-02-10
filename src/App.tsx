import React, { VFC } from 'react'
import {
  sample,
  ex1,
  ex2,
  ex3
} from '../src/utils/week1'
const App: VFC = () => {
  sample("Hello World!")
  ex1("aaa", "bbb")
  ex2()
  ex3()
  return <h1>Hello World!</h1>
}
export default App
