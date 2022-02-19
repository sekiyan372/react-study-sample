import React, { VFC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '~/App'

//week1
import Hello from '~/pages/week1/Hello'

//week2
import Jsx from '~/pages/week2/Jsx'
import ComponentSample from '~/pages/week2/ComponentSample'
import StyledComponents from '~/pages/week2/StyledComponents'
import PropsSample from '~/pages/week2/PropsSample'
import ExWeek2 from '~/pages/week2/Ex'

//week3
import Count from '~/pages/week3/Count'
import Form from '~/pages/week3/Form'
import ExWeek3 from '~/pages/week3/Ex'

//week4
import OparationCount from '~/pages/week4/Count'
import Post from '~/pages/week4/Post'
import Loop from '~/pages/week4/Loop'
import ExWeek4 from '~/pages/week4/Ex'

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

      {/* week3 */}
      <Route path="/week3/count" element={<Count />} />
      <Route path="/week3/form" element={<Form />} />
      <Route path="/week3/ex" element={<ExWeek3 />} />

      {/* week4 */}
      <Route path="/week4/count" element={<OparationCount />} />
      <Route path="/week4/post" element={<Post />} />
      <Route path="/week4/loop" element={<Loop />} />
      <Route path="/week4/ex" element={<ExWeek4 />} />
    </Routes>
  </BrowserRouter>
)

export default Router
