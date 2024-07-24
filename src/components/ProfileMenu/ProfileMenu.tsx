import { SvgIcon } from '@gonchar44/react-components-pack'
import { NavLink } from 'react-router-dom'
import cn from 'classnames'
import { links } from './constants.ts'
import { theme } from '@config'

export const ProfileMenu = () => (
  <aside className="w-56">
    <nav>
      <ul className="flex flex-col gap-y-0.5">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              className={({ isActive }) =>
                cn(
                  `w-full border-2 border-secondary-transparent flex items-center gap-x-2 p-1.5 rounded-xl hover:border-primary-dark transition-all duration-200`,
                  {
                    'bg-primary-dark': isActive
                  }
                )
              }
              to={link.path}
            >
              {({ isActive }) => (
                <>
                  <SvgIcon
                    $icon={link.icon}
                    $color={
                      isActive
                        ? theme.colors.primary.light
                        : theme.colors.primary.dark
                    }
                  />
                  <span
                    className={cn({
                      'text-primary-light': isActive
                    })}
                  >
                    {link.label}
                  </span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
)
