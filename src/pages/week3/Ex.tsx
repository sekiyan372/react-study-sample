// Access to http://localhost:3000/week3/ex/

import React, { FC } from 'react'
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

const MemoApp: FC = () => {
  return (
    <Wrapper>
      <h1>Memo App</h1>

      <form>
        <div>
          <Label htmlFor="title">タイトル</Label>
          <Input type="text" id="title" />
        </div>

        <div>
          <Label htmlFor="content">内容</Label>
          <Textarea id="content" rows={3} />
        </div>

        <Button>登録</Button>
      </form>
    </Wrapper>
  )
}

export default MemoApp
