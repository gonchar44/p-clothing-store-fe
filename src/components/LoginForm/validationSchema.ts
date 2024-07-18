import { object, string } from 'yup'
import { Messages } from '@constants'

export const validationSchema = object().shape({
  identifier: string()
    .min(3, Messages.minCharsLength({ length: 3 }))
    .max(45, Messages.maxCharsLength({ length: 45 }))
    .required(Messages.requiredField),
  password: string()
    .min(6, Messages.minCharsLength({ length: 6 }))
    .max(100, Messages.maxCharsLength({ length: 100 }))
    .required(Messages.requiredField)
})
