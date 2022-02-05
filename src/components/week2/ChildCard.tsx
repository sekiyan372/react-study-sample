/* eslint-disable react/prop-types */
import React, { VFC } from 'react'

type Props = {
  id: number
  title: string
  desc: string
}

const ChildCard: VFC<Props> = ({ id, title, desc }) => {
  return (
    <div>
      <h2>
        {id}: {title}
      </h2>
      <div>{desc}</div>
    </div>
  )
}

export default ChildCard
