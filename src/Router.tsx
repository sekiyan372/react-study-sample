import React, { VFC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '~/App'
import Hello from '~/pages/weak1/Hello'

const Router: VFC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />

      {/* wewk1 */}
      <Route path="/weak1/hello" element={<Hello />} />
    </Routes>
  </BrowserRouter>
)

export default Router
