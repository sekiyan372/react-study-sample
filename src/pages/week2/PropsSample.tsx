// Access to http://localhost:3000/week2/props/

import React, { VFC } from 'react'
import Title from '~/components/week2/TItle'
import ChildCard from '~/components/week2/ChildCard'

const SampleData = [
  {
    id: 1,
    title: "サンプル1",
    desc: "これはサンプルデータ1です。"
  },
  {
    id: 2,
    title: "サンプル2",
    desc: "これはサンプルデータ2です。"
  },
  {
    id: 3,
    title: "サンプル3",
    desc: "これはサンプルデータ3です。"
  }
]

const PropsSample: VFC = () => {
  return (
    <>
      <Title>サンプルデータ一覧</Title>

      {SampleData.map(data => {
        <ChildCard
          id={data.id}
          title={data.title}
          desc={data.desc}
        />
      })}
    </>
  )
}

export default PropsSample
