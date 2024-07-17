import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { INavigationLink } from '@types'
import { selectIsAuthorized } from '@store'

const baseLinks: INavigationLink[] = [
  {
    label: 'Main',
    path: '/'
  },
  {
    label: 'Saved',
    path: '/saved'
  },
  {
    label: 'Cart',
    path: '/cart'
  }
]

export const useHeaderNavigation = (): INavigationLink[] => {
  const isAuthorized = useSelector(selectIsAuthorized)

  return useMemo(() => {
    if (isAuthorized) {
      return [
        ...baseLinks,
        {
          label: 'Profile',
          path: '/profile'
        }
      ]
    } else {
      return [
        ...baseLinks,
        {
          label: 'Log in',
          path: '/login'
        }
      ]
    }
  }, [isAuthorized])
}
