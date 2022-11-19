import React, { FC } from 'react'

type Props = {
  children: React.ReactNode
}

const Title: FC<Props> = ({ children }) => {
  return <h1>{children}</h1>
}

export default Title
