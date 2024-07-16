import { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface ILinkProps {
  text: string
  path: string
}

export const Link: FC<ILinkProps> = ({ text, path }) => (
  <NavLink className="border-b-2" to={path}>
    {text}
  </NavLink>
)
