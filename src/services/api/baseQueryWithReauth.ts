import {
  BaseQueryApi,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError
} from '@reduxjs/toolkit/query'
import { Mutex } from 'async-mutex'
import Cookies from 'js-cookie'
import { authApi, baseQuery, manageAuthCookies } from '@services'
import { CookiesNames } from '@types'

const mutex = new Mutex()

interface IRefetchQueryParams {
  refreshToken: string
  api: BaseQueryApi
  extraOptions: {}
}

const refetchQuery = ({
  refreshToken,
  api,
  extraOptions
}: IRefetchQueryParams) =>
  baseQuery(
    {
      url: '/token/refresh',
      method: 'POST',
      body: {
        refreshToken
      }
    },
    api,
    extraOptions
  )

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  const accessToken = Cookies.get(CookiesNames.access_token)
  const refreshToken = Cookies.get(CookiesNames.refresh_token)
  const accessError =
    result.error?.status === 403 || result.error?.status === 401

  if (refreshToken && (!accessToken || accessError)) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      try {
        const refreshResult = await refetchQuery({
          refreshToken,
          api,
          extraOptions
        })

        if (refreshResult?.data) {
          await manageAuthCookies(refreshResult)
          result = await baseQuery(args, api, extraOptions)
        } else {
          api.dispatch(authApi.endpoints.logout.initiate(null))
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}
