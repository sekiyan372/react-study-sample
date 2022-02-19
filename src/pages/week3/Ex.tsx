// Access to http://localhost:3000/week3/ex/

import React, { VFC, useState, FormEvent } from 'react'
import styled from 'styled-components'
import Wrapper from '~/components/Wrapper'

const Label = styled.label`
  display: block;
`

const Input = styled.input`
  width: 300px;
`

const Textarea = styled.textarea`
  width: 300px;
`

const Button = styled.button`
  font-size: 1.5rem;
  margin: 30px;
`

const Card = styled.div`
  margin: 10px;
  border: 1px solid black;
  padding: 10px;
`

type Memo = {
  id: number
  title: string
  content: string
}

let nextId = 0

const MemoApp: VFC = () => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [list, setList] = useState<Memo[]>([])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setList([...list, {id: nextId++, title: title, content: content}])
    setTitle('')
    setContent('')
  }

  const deleteMemo = (id: number) => {
    const newList = list.filter(memo => memo.id !== id)
    setList(newList)
  }

  return (
    <Wrapper>
      <h1>Memo App</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <Label htmlFor="title">タイトル</Label>
          <Input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="conten">内容</Label>
          <Textarea
            id="content"
            rows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <Button>登録</Button>
      </form>

      {list.map((memo) => (
        <Card key={memo.id}>
          <h3>{memo.title}</h3>
          <div>{memo.content}</div>
          <Button onClick={() => deleteMemo(memo.id)}>削除</Button>
        </Card>
      ))}
    </Wrapper>
  )
}

export default MemoApp
