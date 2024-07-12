import { baseApi, manageAuthCookies, removeAuthCookies } from '@services'
import {
  ILoginBody,
  IRegisterBody,
  IUser,
  ILogoutResponse,
  ITokens,
  Tags
} from '@types'

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<ITokens, ILoginBody>({
      query: (body) => ({
        url: '/auth/local',
        method: 'POST',
        body
      }),
      invalidatesTags: [Tags.user],
      async onQueryStarted(_, { queryFulfilled }) {
        manageAuthCookies(queryFulfilled).catch((error) => error)
      }
    }),
    register: build.mutation<ITokens, IRegisterBody>({
      query: (body) => ({
        url: `/auth/local/register`,
        method: 'POST',
        body
      })
    }),
    logout: build.mutation<ILogoutResponse, null>({
      query: () => ({
        url: `/logout`,
        method: 'POST'
      }),
      onQueryStarted(_, { dispatch }) {
        removeAuthCookies()
        dispatch(
          authApi.util.updateQueryData('getMyUserInfo', null, () => {
            return {} as IUser
          })
        )
      }
    }),
    getMyUserInfo: build.query<IUser, null>({
      query: () => `/users/me`,
      providesTags: [Tags.user]
    })
  })
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useGetMyUserInfoQuery
} = authApi
