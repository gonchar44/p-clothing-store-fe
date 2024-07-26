import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { IHeaderNavLink } from '@types'
import { selectIsAuthorized } from '@store'

const baseLinks: IHeaderNavLink[] = [
  {
    label: 'Main',
    path: '/'
  }
]

const manageDynamicData = ({
  links,
  cartAmount,
  isNewSaved
}: {
  links: IHeaderNavLink[]
  cartAmount: number
  isNewSaved: boolean
}): IHeaderNavLink[] => [
  ...links,
  {
    label: 'Saved',
    path: '/saved',
    isNotification: isNewSaved
  },
  {
    label: 'Cart',
    path: '/cart',
    notificationsAmount: cartAmount
  }
]

export const useHeaderNavigation = (): IHeaderNavLink[] => {
  const isAuthorized = useSelector(selectIsAuthorized)

  return useMemo(() => {
    // TODO: get actual saved data (add "isNew" flag in DB, if user open "Saved" page - set as false, set as true on saving of new product)
    // TODO: get actual cart data
    const result = manageDynamicData({
      links: baseLinks,
      cartAmount: 10, // data is mock
      isNewSaved: true // data is mock
    })

    if (isAuthorized) {
      return [
        ...result,
        {
          label: 'Profile',
          path: '/profile'
        }
      ]
    } else {
      return [
        ...result,
        {
          label: 'Log in',
          path: '/login'
        }
      ]
    }
  }, [isAuthorized])
}
