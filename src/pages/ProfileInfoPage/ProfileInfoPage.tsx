import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectIsAuthorized } from '@store'
import { useGetMyUserInfoQuery } from '@services'

export const ProfileInfoPage = () => {
  const isAuthorized = useSelector(selectIsAuthorized)
  const { data: userData } = useGetMyUserInfoQuery(null, {
    skip: !isAuthorized
  })

  useEffect(() => {
    console.log('userData', userData)
  }, [userData])

  return (
    <section>
      {userData && (
        <div>
          <span>
            <b>/{userData.username}/</b>
          </span>
        </div>
      )}
    </section>
  )
}
