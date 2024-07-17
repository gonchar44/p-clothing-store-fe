import { useEffect, useState } from 'react'
import { ApiError, ParsedError, IError, INestedError, Keys } from '@types'

export const useParseError = (originalError: ApiError): ParsedError => {
  const [parsedError, setParsedError] = useState<ParsedError>(null)

  const parseError = () => {
    // First level error parsing
    if (
      originalError?.status === 403 ||
      originalError?.hasOwnProperty(Keys.original_status)
    ) {
      return setParsedError({
        status: (originalError as IError).originalStatus,
        message: 'Something went wrong'
      })
    }

    // Nested error parsing
    const nestedError = originalError as INestedError
    const { status, message } = nestedError.data.error

    setParsedError({ status, message })
  }

  useEffect(() => {
    if (!originalError) {
      return setParsedError(null)
    }

    parseError()
  }, [originalError])

  return parsedError
}
