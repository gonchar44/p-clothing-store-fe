import { useLogoutMutation } from '@services'
import { useNavigate } from 'react-router-dom'

export const ProfilePage = () => {
  const navigate = useNavigate()
  const [logout] = useLogoutMutation()

  const handleLogout = async () => {
    await logout(null).unwrap()
    navigate('/')
  }

  return (
    <div>
      <h2>ProfilePage</h2>

      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
