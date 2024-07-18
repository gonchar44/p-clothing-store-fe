export const Messages = {
  minCharsLength: ({ length }: { length: number }) =>
    `Minimum number of characters is ${length}`,
  maxCharsLength: ({ length }: { length: number }) =>
    `Maximum number of characters is ${length}`,
  requiredField: 'The field is required',
  emailType: 'Please enter a valid email'
}
