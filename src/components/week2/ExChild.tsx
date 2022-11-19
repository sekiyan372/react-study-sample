import React, { FC } from 'react'
import styled from 'styled-components'
import FSN from '~/images/fsn.jpg'
import UBW from '~/images/ubw.jpg'
import HF from '~/images/hf.jpg'

const Title = styled.div`
  color: red;
`

type Props = {
  id: string
  title: string
  root: string
}

const ExChild: FC<Props> = ({ id, title, root }) => {
  return (
    <div>
      <Title>
        {id} {title}
      </Title>
      <div>{root}</div>

      {/* 画像やり方1(publicの中の画像を使用) */}
      <img src={`../../images/${id}.jpg`} alt="image" />

      {/* 画像やり方2(src/images/ の画像を使用) */}
      {id === 'fsn' && <img src={FSN} alt="image" />}

      {id === 'ubw' && <img src={UBW} alt="image" />}

      {id === 'hf' && <img src={HF} alt="image" />}
    </div>
  )
}

export default ExChild
