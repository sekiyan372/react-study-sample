// Access to http://localhost:3000/week3/ex/

import React, { VFC } from 'react'
import styled from 'styled-components'
import Wrapper from '~/components/week3/Wrapper'

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

const MemoApp: VFC = () => {
  return (
    <Wrapper>
      <h1>Memo App</h1>

      <form>
        <div>
          <Label htmlFor="title">タイトル</Label>
          <Input
            type="text"
            id="title"
          />
        </div>

        <div>
          <Label htmlFor="conten">内容</Label>
          <Textarea
            id="content"
            rows={3}
          />
        </div>

        <Button>登録</Button>
      </form>
    </Wrapper>
  )
}

export default MemoApp
