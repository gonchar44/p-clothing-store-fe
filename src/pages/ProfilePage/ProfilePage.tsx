import { useLogoutMutation } from '@services'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { ProfileMenu } from '@components'
import { ProfileInfoPage, OrdersHistoryPage } from '@pages'

export const ProfilePage = () => {
  const navigate = useNavigate()
  const [logout] = useLogoutMutation()

  const handleLogout = async () => {
    try {
      await logout(null).unwrap()
      navigate('/')
    } catch (error) {
      return error
    }
  }

  return (
    <main className="flex gap-x-10">
      <ProfileMenu />

      <Routes>
        <Route path="/info" element={<ProfileInfoPage />} />
        <Route path="/orders-history" element={<OrdersHistoryPage />} />
        <Route path="*" element={<Navigate to="/profile/info" />} />
      </Routes>

      <button onClick={handleLogout}>Logout</button>
    </main>
  )
}
