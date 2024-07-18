import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { Field } from '@gonchar44/react-components-pack'
import { useRegisterMutation } from '@services'
import { useParseError } from '@hooks'
import { ApiError } from '@types'
import { initialValues } from './constants.ts'
import { validationSchema } from './validationSchema.ts'
import { ErrorMessage, FormButtons } from '@components'

export const CreateAccountForm = () => {
  const [isTriggered, setIsTriggered] = useState(false)
  const navigate = useNavigate()

  const [
    register,
    {
      isLoading: isRegisterLoading,
      error: registerError,
      reset: resetRegisterError
    }
  ] = useRegisterMutation()
  const parsedRegisterError = useParseError(registerError as ApiError)
  const isError = !!parsedRegisterError

  const { values, errors, submitCount, isValid, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      validateOnChange: isTriggered,
      onSubmit: async (values) => {
        try {
          await register(values).unwrap()
          navigate('/login')
        } catch (error) {
          return error
        }
      }
    })
  const isSubmitDisabled =
    !isValid || isRegisterLoading || !!parsedRegisterError

  // Allows validation on changed after first trying of submit
  useEffect(() => {
    if (!isTriggered && submitCount > 0) {
      setIsTriggered(true)
    }
  }, [submitCount])

  // Resetting registration error
  useEffect(() => {
    if (registerError) {
      resetRegisterError()
    }
  }, [values])

  return (
    <form
      className="w-full flex flex-col items-center gap-y-2"
      onSubmit={handleSubmit}
    >
      <Field
        name="email"
        $label="Email"
        placeholder="Enter your email"
        value={values.email}
        $max={100}
        $isError={isError}
        $errorMessage={errors.email}
        onChange={handleChange}
      />

      <Field
        name="username"
        $label="Username"
        placeholder="Enter your username"
        value={values.username}
        $max={45}
        $isError={isError}
        $errorMessage={errors.username}
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

      {parsedRegisterError && (
        <ErrorMessage message={parsedRegisterError.message} />
      )}

      <FormButtons
        isSubmitDisabled={isSubmitDisabled}
        submitText="Register"
        secondaryText="Log in"
        secondaryAction={() => navigate('/login')}
      />
    </form>
  )
}
