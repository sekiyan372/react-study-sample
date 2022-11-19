import React, { FC } from 'react'
import styled from 'styled-components'

const WrapElement = styled.div`
  text-align: center;
`

type Props = {
  children: React.ReactNode
}

const Wrapper: FC<Props> = ({ children }) => {
  return <WrapElement>{children}</WrapElement>
}

export default Wrapper
