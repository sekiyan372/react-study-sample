// Access to http://localhost:3000/week2/ex/

import React, { VFC } from 'react'

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
  オプション: 画像を表示できます。画像は /images にあります。
  オプションのヒント: 画像の名前と データの id が同じ名前になっています。
                    テンプレートリテラルを使うといい感じに表示できるかも？
*/

const ExWeek2: VFC = () => {
  console.log(ExData)

  return (
    <>
      <h1>Fateシリーズ</h1>
    </>
  )
}

export default ExWeek2
