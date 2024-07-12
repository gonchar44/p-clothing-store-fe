import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'
import { authApi } from '@services'
import { CookiesNames } from '@types'

interface IAuthState {
  isAuthorized: boolean
}

const initialState: IAuthState = {
  isAuthorized: !!Cookies.get(CookiesNames.refresh_token)
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthorized = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state) => {
        state.isAuthorized = true
      })
      .addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
        state.isAuthorized = false
      })
  }
})
