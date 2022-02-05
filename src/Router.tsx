import React, { VFC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '~/App'

//week1
import Hello from '~/pages/week1/Hello'

//weel2
import Jsx from './pages/week2/Jsx'
import ComponentSample from './pages/week2/ComponentSample'
import StyledComponents from '~/pages/week2/StyledComponents'
import PropsSample from './pages/week2/PropsSample'
import ExWeek2 from './pages/week2/Ex'

const Router: VFC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />

      {/* week1 */}
      <Route path="/week1/hello" element={<Hello />} />

      {/* week2 */}
      <Route path="/week2/jsx" element={<Jsx />} />
      <Route path="/week2/component" element={<ComponentSample />} />
      <Route path="/week2/styled-components" element={<StyledComponents />} />
      <Route path="/week2/props" element={<PropsSample />} />
      <Route path="/week2/ex" element={<ExWeek2 />} />
    </Routes>
  </BrowserRouter>
)

export default Router
