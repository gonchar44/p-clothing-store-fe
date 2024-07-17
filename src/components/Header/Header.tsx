import { Navigation } from '@gonchar44/react-components-pack'
import { useHeaderNavigation } from '@hooks'

// TODO: add logo with link
export const Header = () => {
  const links = useHeaderNavigation()

  return (
    <header className="flex justify-center items-center p-2 sticky top-0 left-0">
      <Navigation links={links} />
    </header>
  )
}
