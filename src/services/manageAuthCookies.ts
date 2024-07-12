import { CookiesNames, ITokens } from '@types'
import Cookies from 'js-cookie'
import { setTokenCookie } from '@services'

// TODO: cover params by TS
export const manageAuthCookies = async (promise: any): Promise<ITokens> => {
  try {
    const { data } = await promise

    if (!!data) {
      // Access token setting
      setTokenCookie({
        name: CookiesNames.access_token,
        token: data.accessToken
      })

      // Refresh token setting
      setTokenCookie({
        name: CookiesNames.refresh_token,
        token: data.refreshToken
      })
    }

    return data
  } catch (err) {
    throw err
  }
}

export const removeAuthCookies = () => {
  Cookies.remove(CookiesNames.access_token)
  Cookies.remove(CookiesNames.refresh_token)
}
