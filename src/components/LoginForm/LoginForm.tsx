import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Field } from '@gonchar44/react-components-pack'
import { useFormik } from 'formik'
import { initialValues } from './constants.ts'
import { validationSchema } from './validationSchema.ts'
import { useLoginMutation } from '@services'
import { useParseError } from '@hooks'
import { ApiError } from '@types'
import { ErrorMessage, FormButtons } from '@components'

export const LoginForm = () => {
  const [isTriggered, setIsTriggered] = useState(false)

  const navigate = useNavigate()
  const [
    login,
    { isLoading: isLoginLoading, error: loginError, reset: resetLoginError }
  ] = useLoginMutation()
  const parsedLoginError = useParseError(loginError as ApiError)
  const isError = !!parsedLoginError

  const { values, errors, submitCount, isValid, handleChange, handleSubmit } =
    useFormik({
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

  // Allows validation on changed after first trying of submit
  useEffect(() => {
    if (!isTriggered && submitCount > 0) {
      setIsTriggered(true)
    }
  }, [submitCount])

  // Resetting login error
  useEffect(() => {
    if (loginError) {
      resetLoginError()
    }
  }, [values])

  return (
    <form
      className="w-full flex flex-col items-center gap-y-2"
      onSubmit={handleSubmit}
    >
      <Field
        name="identifier"
        $label="Username"
        placeholder="Enter your username"
        value={values.identifier}
        $max={45}
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
        $max={100}
        $isError={isError}
        $errorMessage={errors.password}
        onChange={handleChange}
      />

      {parsedLoginError && <ErrorMessage message={parsedLoginError.message} />}

      <FormButtons
        isSubmitDisabled={isSubmitDisabled}
        submitText="Log in"
        secondaryText="Create account"
        secondaryAction={() => navigate('/create-account')}
      />
    </form>
  )
}
