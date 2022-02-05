// Access to http://localhost:3000/weak1/hello

import React, { VFC } from 'react'
import {
  sample,
} from '~/utils/weak1'

const App: VFC = () => {
  sample("Hello World!")

  return <h1>Hello World!</h1>
}

export default App
