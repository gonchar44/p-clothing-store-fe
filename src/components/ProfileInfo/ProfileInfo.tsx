import { FC, memo } from 'react'
import { Button } from '@gonchar44/react-components-pack'
import { IUser, IUserForm, UserInfoHeaders } from '@types'
import { useLogoutMutation } from '@services'
import { useNavigate } from 'react-router-dom'
import { useUserInfo } from './hooks'
import { ScreenLoader } from '../common'

interface IProfileInfoProps {
  userData: IUser | undefined
  openEditForm: () => void
}

export const ProfileInfo: FC<IProfileInfoProps> = memo(
  ({ userData, openEditForm }) => {
    const navigate = useNavigate()
    const [logout, { isLoading: isLogoutLoading }] = useLogoutMutation()
    const userInfo: Partial<IUserForm> | undefined = useUserInfo(userData)

    const handleLogout = async () => {
      try {
        await logout(null).unwrap()
        navigate('/')
      } catch (error) {
        return error
      }
    }

    return (
      <>
        {isLogoutLoading && <ScreenLoader />}

        <div className="flex flex-col gap-y-3">
          {/*User info*/}
          {userInfo &&
            (Object.keys(userInfo) as (keyof IUserForm)[]).map((infoKey) => (
              <div key={`${infoKey}-info`}>
                <h3 className="text-h3">
                  {UserInfoHeaders[infoKey as keyof typeof UserInfoHeaders]}
                </h3>

                <span>{userInfo[infoKey] || '-'}</span>
              </div>
            ))}

          {/*Buttons control*/}
          <div className="flex gap-x-3 mt-5">
            <Button disabled={isLogoutLoading} onClick={handleLogout}>
              Logout
            </Button>

            <Button
              $variant="secondary"
              disabled={isLogoutLoading}
              onClick={openEditForm}
            >
              Edit info
            </Button>
          </div>
        </div>
      </>
    )
  }
)
