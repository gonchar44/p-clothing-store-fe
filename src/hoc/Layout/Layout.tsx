import { FC, ReactNode } from 'react'
import { Header } from '@components'

interface ILayoutProps {
  children: ReactNode
}

export const Layout: FC<ILayoutProps> = ({ children }) => (
  <div className="min-h-screen bg-primary-muted">
    <Header />

    <div className="p-4">{children}</div>
  </div>
)
