export interface INavigationLink {
  label: string
  path: string
  icon?: any
}

export interface IHeaderNavLink extends Omit<INavigationLink, 'icon'> {
  isNotification?: boolean
  notificationsAmount?: number
}
