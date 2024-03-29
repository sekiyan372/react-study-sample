// Access to http://localhost:3000/week2/styled-components/

import React, { FC } from 'react'
import styled, { keyframes } from 'styled-components'
import logo from '~/logo.svg'

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const App = styled.div`
  text-align: center;
`

const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${AppLogoSpin} infinite 20s linear;
  }
`

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const AppLink = styled.a`
  color: #61dafb;
`

const StyledComponents: FC = () => {
  return (
    <App>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>weak2 styled-components</p>
        <AppLink
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </AppLink>
      </AppHeader>
    </App>
  )
}

export default StyledComponents
