import React, { VFC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '~/App'
import Hello from '~/pages/week1/Hello'
import StyledComponents from '~/pages/week2/StyledComponents'

const Router: VFC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />

      {/* week1 */}
      <Route path="/week1/hello" element={<Hello />} />

      {/* week2 */}
      <Route path="/week2/styled-components" element={<StyledComponents />} />
    </Routes>
  </BrowserRouter>
)

export default Router
