import React, { VFC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '~/App'
import Hello from '~/pages/weak1/Hello'
import StyledComponents from '~/pages/weak2/StyledComponents'

const Router: VFC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />

      {/* wewk1 */}
      <Route path="/weak1/hello" element={<Hello />} />

      {/* weak2 */}
      <Route path="/weak2/styled-components" element={<StyledComponents />} />
    </Routes>
  </BrowserRouter>
)

export default Router
