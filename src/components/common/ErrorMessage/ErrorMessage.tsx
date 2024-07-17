import { FC } from 'react'

interface IErrorMessageProps {
  message: string
}

export const ErrorMessage: FC<IErrorMessageProps> = ({ message }) => (
  <span className="text-secondary-error">{message}</span>
)
