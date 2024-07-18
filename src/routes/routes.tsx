import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  LoginPage,
  ProfilePage,
  MainPage,
  NotfoundPage,
  CreateAccountPage
} from '@pages'
import { selectIsAuthorized } from '@store'
import { PublicRoute, ProtectedRoute } from '@routes'
import { Layout } from '@hoc'

export const RoutesList = () => {
  const isAuthorized = useSelector(selectIsAuthorized)

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/*Only protected routes*/}
          <Route
            element={
              <ProtectedRoute
                isAuthorized={isAuthorized}
                redirectPath="/login"
              />
            }
          >
            <Route path="/profile" element={<ProfilePage />} />
          </Route>

          {/*Only public routes*/}
          <Route
            element={
              <PublicRoute isAuthorized={isAuthorized} redirectPath="/" />
            }
          >
            <Route path="/create-account" element={<CreateAccountPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>

          {/*General routes*/}
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotfoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
