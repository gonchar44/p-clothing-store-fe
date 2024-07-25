import { Navigate, Route, Routes } from 'react-router-dom'
import { ProfileMenu } from '@components'
import { ProfileInfoPage, OrdersHistoryPage } from '@pages'

export const ProfilePage = () => (
  <main className="w-full flex gap-x-10">
    <ProfileMenu />

    <Routes>
      <Route path="/info" element={<ProfileInfoPage />} />
      <Route path="/orders-history" element={<OrdersHistoryPage />} />
      <Route path="*" element={<Navigate to="info" />} />
    </Routes>
  </main>
)
