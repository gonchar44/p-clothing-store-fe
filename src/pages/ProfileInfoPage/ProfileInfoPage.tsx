import { useState } from 'react'
import { useSelector } from 'react-redux'
import { ProfileInfo, ScreenLoader } from '@components'
import { selectIsAuthorized } from '@store'
import { useGetMyUserInfoQuery } from '@services'

export const ProfileInfoPage = () => {
  const isAuthorized = useSelector(selectIsAuthorized)
  const { data: userData, isLoading: isUserDataLoading } =
    useGetMyUserInfoQuery(null, {
      skip: !isAuthorized
    })
  const [isEditing, setIsEditing] = useState(true)

  return (
    <section className="w-full">
      {isUserDataLoading && <ScreenLoader />}

      {isEditing ? (
        <ProfileInfo
          userData={userData}
          openEditForm={() => setIsEditing(false)}
        />
      ) : (
        <div>Edit form...</div>
      )}
    </section>
  )
}
