// Access to http://localhost:3000/week2/ex/

import React, { VFC } from 'react'
import ExChild from '~/components/week2/ExChild'

const ExData = [
  {
    id: 'fsn',
    title: 'Fate/stay night',
    root: 'セイバールート',
  },
  {
    id: 'ubw',
    title: 'Unlimited Blade Works',
    root: '遠坂凛ルート',
  },
  {
    id: 'hf',
    title: "Heaven's Feel",
    root: '間桐桜ルート',
  },
]

/*
  オプション: 画像を表示できます。画像は public にあります。
  オプションのヒント: 画像のファイル名と データの id が同じ名前になっています。
                    画像はパスは /images/ファイル名 とすると表示できます。
                    テンプレートリテラルを使うといい感じに表示できるかも？
*/

const ExWeek2: VFC = () => {
  return (
    <>
      <h1>Fateシリーズ</h1>
      {ExData.map((data) => (
        <ExChild
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
