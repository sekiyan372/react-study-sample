// Access to http://localhost:3000/week1/hello

import React, { FC } from 'react'
import { sample } from '~/utils/week1'

const App: FC = () => {
  sample('Hello World!')

  return <h1>Hello World!</h1>
}

export default App
