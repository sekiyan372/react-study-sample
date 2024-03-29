// Access to http://localhost:3000/week2/component/

import React, { FC } from 'react'
import Card from '~/components/week2/Card'

const Button: FC = () => <button>同じファイルのボタン</button>

const ComponentSample: FC = () => {
  return (
    <>
      <h1>コンポーネントの使い方例</h1>

      {/* 上記で宣言したコンポーネントを表示 */}
      <Button />

      {/* import したコンポーネントを表示 */}
      <Card />
    </>
  )
}

export default ComponentSample
