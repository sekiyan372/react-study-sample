/* eslint-disable react/prop-types */
import React, { VFC } from 'react'

type Props = {
  children: React.ReactNode
}

const Title: VFC<Props> = ({ children }) => {
  return <h1>{children}</h1>
}

export default Title
