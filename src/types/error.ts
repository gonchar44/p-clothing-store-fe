export interface IError {
  data: string
  error: string
  originalStatus: number
  status: string
}

export interface INestedError {
  data: {
    data: unknown
    error: {
      details: object
      message: string
      name: string
      status: number
    }
  }
  status: number
}

export interface IParsedErrorBody {
  message: string
  status: number | null
}

export type ParsedError = IParsedErrorBody | null

export type ApiError = IError | INestedError | undefined
