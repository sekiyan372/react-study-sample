import React, { VFC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '~/App'
import Hello from '~/pages/week1/Hello'
import Jsx from './pages/week2/Jsx'
import ComponentSample from './pages/week2/ComponentSample'
import StyledComponents from '~/pages/week2/StyledComponents'

const Router: VFC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />

      {/* week1 */}
      <Route path="/week1/hello" element={<Hello />} />

      {/* week2 */}
      <Route path="/week2/jsx" element={<Jsx />} />
      <Route path="/week2/component-sample" element={<ComponentSample />} />
      <Route path="/week2/styled-components" element={<StyledComponents />} />
    </Routes>
  </BrowserRouter>
)

export default Router
