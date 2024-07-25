import { useMemo } from 'react'
import { hiddenValues } from '../constants.ts'
import { IUser, IUserForm } from '@types'

export const useUserInfo = (
  userData: IUser | undefined
): Partial<IUserForm> | undefined => {
  return useMemo(() => {
    if (!userData) return

    return Object.fromEntries(
      Object.entries(userData).filter(
        ([field]) => !hiddenValues.includes(field)
      )
    )
  }, [userData])
}
