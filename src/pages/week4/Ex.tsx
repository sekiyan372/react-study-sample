// Access to http://localhost:3000/week4/ex/

import React, { FC, useState } from 'react'

const ViewTodos: FC = () => {
  // チェックボックスの State
  const [checked, setChecked] = useState<boolean>(false)

  return (
    <>
      <h1>View Todos Page</h1>

      <input
        type="checkbox"
        id="completed"
        checked={checked}
        onClick={() => setChecked(!checked)}
      />
      <label htmlFor="completed">未完了だけを表示</label>

      {/* ここにリスト表示する */}
      <ul>
        <li></li>
      </ul>
    </>
  )
}

export default ViewTodos
