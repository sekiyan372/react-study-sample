// Access to http://localhost:3000/week3/form/

import React, {
  VFC,
  useState,
  FormEvent,
  ChangeEvent
} from 'react'
import styled from 'styled-components'
import Wrapper from '~/components/Wrapper'
import View from '~/components/View'

const Input = styled.input`
  font-size: 2rem;
`

const Button = styled.button`
  font-size: 2rem;
  margin: 30px;
`

const Form: VFC = () => {
  const [view, setView] = useState<string>('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setView('')
    alert('送信されました')
  }

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setView(event.target.value)
  }

  return (
    <Wrapper>
      <View>【{view}】</View>

      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          type="text"
          value={view}
          onChange={(e) => handleInput(e)}
        />
        <Button>送信</Button>
      </form>
    </Wrapper>
  )
}

export default Form
