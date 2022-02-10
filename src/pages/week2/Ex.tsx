// Access to http://localhost:3000/week2/ex/

import React, { VFC } from 'react'
import Title from '~/components/week2/TItle'
import ExChildCard from '~/components/week2/ExChildCard'

const ExData = [
  {
    id: 'fsn',
    title: 'Fate/stay night',
    root: 'セイバールート',
    img: '../../../public/images.fsn.jpg'
  },
  {
    id: 'ubw',
    title: 'Unlimited Blade Works',
    root: '遠坂凛ルート',
    img: '../../../public/images.ubw.jpg'
  },
  {
    id: 'hf',
    title: "Heaven's Feel",
    root: '間桐桜ルート',
    img: '../../../public/images.hf.jpg'
  },
]

/*
  オプション: 画像を表示できます。画像は public にあります。
  オプションのヒント: 画像のファイル名と データの id が同じ名前になっています。
                    画像はパスは /images/ファイル名 とすると表示できます。
                    テンプレートリテラルを使うといい感じに表示できるかも？
*/

const ExWeek2: VFC = () => {
  console.log(ExData)

  return (
    <>
      <Title>Fateシリーズ</Title>

      {ExData.map((data) => (
        <ExChildCard
          key={data.id}
          id={data.id}
          title={data.title}
          root={data.root}
        />
      ))}
    </>
  )
}

export default ExWeek2
