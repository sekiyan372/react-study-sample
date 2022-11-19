import React, { FC } from 'react'

type Props = {
  id: number
  title: string
  desc: string
}

const ChildCard: FC<Props> = ({ id, title, desc }) => {
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
