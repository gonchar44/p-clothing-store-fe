import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie'
import { CookiesNames } from '@types'

const baseUrl = import.meta.env.VITE_API_URL

export const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: 'include',
  prepareHeaders: (headers, { endpoint }) => {
    const accessToken = Cookies.get(CookiesNames.access_token)

    if (accessToken) {
      if (endpoint !== 'token/refresh') {
        headers.set('Authorization', `Bearer ${accessToken}`)
      }
    }

    return headers
  }
})
