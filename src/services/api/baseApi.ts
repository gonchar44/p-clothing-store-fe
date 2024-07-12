import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from '@services'
import { Tags } from '@types'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  tagTypes: [Tags.user],
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({})
})
