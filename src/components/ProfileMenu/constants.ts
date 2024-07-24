import { INavigationLink } from '@types'
import ProfileIcon from '@assets/icons/profile.svg'
import ListIcon from '@assets/icons/list.svg'

export const links: INavigationLink[] = [
  { label: 'Info', path: 'info', icon: ProfileIcon },
  { label: 'Orders History', path: 'orders-history', icon: ListIcon }
]
