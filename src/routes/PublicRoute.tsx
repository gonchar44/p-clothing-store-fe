import { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { IRouteProps } from '@types'

export const PublicRoute: FC<IRouteProps> = ({
  isAuthorized,
  redirectPath
}) => {
  if (isAuthorized) {
    return <Navigate to={redirectPath} />
  }

  return <Outlet />
}
