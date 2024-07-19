import { object, string, ref } from 'yup'
import { Messages } from '@constants'

export const validationSchema = object().shape({
  email: string()
    .email(Messages.emailType)
    .max(100, Messages.maxCharsLength({ length: 100 }))
    .required(Messages.requiredField),
  username: string()
    .min(3, Messages.minCharsLength({ length: 3 }))
    .max(45, Messages.maxCharsLength({ length: 45 }))
    .required(Messages.requiredField),
  password: string()
    .min(6, Messages.minCharsLength({ length: 6 }))
    .max(100, Messages.maxCharsLength({ length: 100 }))
    .required(Messages.requiredField),
  confirmPassword: string()
    .oneOf([ref('password')], Messages.passwordsMatch)
    .min(6, Messages.minCharsLength({ length: 6 }))
    .max(100, Messages.maxCharsLength({ length: 100 }))
    .required(Messages.requiredField)
})
