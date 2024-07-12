import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'
import { IDecodedToken, ISetTokenParams } from '@types'

export const setTokenCookie = ({ name, token }: ISetTokenParams) => {
  const decodedToken = jwtDecode<IDecodedToken>(token)
  const expiresTime = decodedToken.exp * 1000

  Cookies.set(name, token, {
    expires: new Date(expiresTime)
  })
}
