import { LoginForm } from '@components'

export const LoginPage = () => {
  return (
    <div className="w-80 md:w-96 flex flex-col items-center mx-auto">
      <h2 className="text-h2 font-bold">Login</h2>

      <LoginForm />
    </div>
  )
}
