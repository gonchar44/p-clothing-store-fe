export interface IUserForm {
  username: string
  email: string
  address?: string
  dateOfBirth?: string
  sex?: 'man' | 'woman'
  phone?: string
  countryCode?: string
}

export interface IUser extends IUserForm {
  id: number
  provider: string
  confirmed: boolean
  blocked: boolean
  createdAt: string
  updatedAt: string
}

export enum UserInfoHeaders {
  username = 'Username',
  email = 'Email',
  address = 'Address',
  dateOfBirth = 'Date of Birth',
  sex = 'Sex',
  phone = 'Phone'
}
