import React, { FC } from 'react'
import styled from 'styled-components'

const ViewElement = styled.div`
  font-size: 3rem;
  margin: 30px 0;
`

type Props = {
  children: React.ReactNode
}

const View: FC<Props> = ({ children }) => {
  return <ViewElement>{children}</ViewElement>
}

export default View
