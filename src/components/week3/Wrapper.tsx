import React, { VFC } from 'react'
import styled from 'styled-components'

const WrapElement = styled.div`
  text-align: center;
`

type Props = {
  children: React.ReactNode
}

const Wrapper: VFC<Props> = ({ children }) => {
  return (
    <WrapElement>
      {children}
    </WrapElement>
  )
}

export default Wrapper
