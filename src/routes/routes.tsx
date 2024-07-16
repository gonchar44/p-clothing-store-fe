import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Header } from '@components'
import { LoginPage, ProfilePage, MainPage } from '@pages'
import { selectIsAuthorized } from '@store'
import { PublicRoute, ProtectedRoute } from '@routes'

export const RoutesList = () => {
  const isAuthorized = useSelector(selectIsAuthorized)

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/*Only protected routes*/}
        <Route
          element={
            <ProtectedRoute isAuthorized={isAuthorized} redirectPath="/login" />
          }
        >
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        {/*Only public routes*/}
        <Route
          element={<PublicRoute isAuthorized={isAuthorized} redirectPath="/" />}
        >
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/*General routes*/}
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}
