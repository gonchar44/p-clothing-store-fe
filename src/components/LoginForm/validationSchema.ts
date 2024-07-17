import { object, string } from 'yup'

export const validationSchema = object().shape({
  identifier: string()
    .min(3, 'Minimum number of characters is 3')
    .required('The field is required'),
  password: string()
    .min(6, 'Minimum number of characters is 6')
    .required('The field is required')
})
