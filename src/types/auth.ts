export interface ISetTokenParams {
  name: string
  token: string
}

export interface IDecodedToken {
  id: number
  iat: number
  exp: number
}

export interface ILoginBody {
  identifier: string
  password: string
}

export interface IRegisterBody {
  email: string
  username: string
  password: string
}

export interface ITokens {
  accessToken: string
  refreshToken: string
}

export interface ILogoutResponse {
  message: string
}
