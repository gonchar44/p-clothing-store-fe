import { FC, ReactNode } from 'react'
import { Header } from '@components'

interface ILayoutProps {
  children: ReactNode
}

export const Layout: FC<ILayoutProps> = ({ children }) => (
  <div className="min-h-screen bg-primary-muted flex flex-col">
    <Header />

    <div className="w-full flex flex-grow p-8">{children}</div>
  </div>
)
