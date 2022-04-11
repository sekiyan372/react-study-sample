// Access to http://localhost:3000/week4/ex/

import React, { VFC, useState, useEffect } from 'react'

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

const ViewTodos: VFC = () => {
  const [checked, setChecked] = useState<boolean>(false)
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    const fetchPost = async (): Promise<Todo[]> => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos')
      return await response.json()
    }
    fetchPost().then((data) => {
      const newData = checked ? data.filter((todo) => !todo.completed) : data
      setTodos(newData)
    })
  }, [checked])

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

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} {todo.completed && '✅'}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ViewTodos
