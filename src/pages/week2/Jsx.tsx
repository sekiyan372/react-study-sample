// Access to http://localhost:3000/week2/jsx/

import React, { VFC } from "react"

const Jsx: VFC = () => {
  const hello = 'こんにちは'

  const plusOne = (num: number) => num + 1

  return (
    <>
      <h1 className="title">JSX 記法について</h1>
      <p>{ hello }</p>
      <p>{ plusOne(100) }</p>
    </>
  )
}

export default Jsx
