import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from '@pages'

export const RoutesList = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  </BrowserRouter>
)
