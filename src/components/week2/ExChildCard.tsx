/* eslint-disable react/prop-types */
import React, { VFC } from 'react'
import styled from 'styled-components'

const Title = styled.div`
  color: yellow;
`

const Back = styled.div`
  background-color: black
`

type Props = {
  id: string
  title: string
  root: string
}

const ExChildCard: VFC<Props> = ({ id, title, root }) => {
  return (
    <>
      <Back>
        <h2>
          <Title>{id}: {title}</Title>
        </h2>
        <div>{root}</div>
        {<img src={`../../images/${id}.jpg`} alt="image"/>}
      </Back>
    </>
  )
}

export default ExChildCard
