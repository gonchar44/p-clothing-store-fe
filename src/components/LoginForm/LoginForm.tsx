import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Field } from '@gonchar44/react-components-pack'
import { BottomButtons } from './molecules'
import { useFormik } from 'formik'
import { initialValues } from './constants.ts'
import { validationSchema } from './validationSchema.ts'
import { useLoginMutation } from '@services'
import { useParseError } from '@hooks'
import { ApiError } from '@types'
import { ErrorMessage } from '@components'

export const LoginForm = () => {
  const [isTriggered, setIsTriggered] = useState(false)

  const navigate = useNavigate()
  const [
    login,
    { isLoading: isLoginLoading, error: loginError, reset: resetLoginError }
  ] = useLoginMutation()
  const parsedLoginError = useParseError(loginError as ApiError)
  const isError = !!parsedLoginError

  const { values, errors, isValid, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: isTriggered,
    onSubmit: async (values) => {
      try {
        await login(values).unwrap()
        navigate('/')
      } catch (error) {
        return error
      }
    }
  })
  const isSubmitDisabled = !isValid || isLoginLoading || !!parsedLoginError

  useEffect(() => {
    if (loginError) {
      resetLoginError()
    }
  }, [values])

  return (
    <form
      className="w-full flex flex-col items-center gap-y-2"
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
        setIsTriggered(true)
      }}
    >
      <Field
        name="identifier"
        $label="Identifier"
        placeholder="Enter your identifier"
        value={values.identifier}
        $isError={isError}
        $errorMessage={errors.identifier}
        onChange={handleChange}
      />

      <Field
        name="password"
        $label="Password"
        placeholder="Enter your password"
        type="password"
        value={values.password}
        $isError={isError}
        $errorMessage={errors.password}
        onChange={handleChange}
      />

      {parsedLoginError && <ErrorMessage message={parsedLoginError.message} />}

      <BottomButtons isSubmitDisabled={isSubmitDisabled} />
    </form>
  )
}
