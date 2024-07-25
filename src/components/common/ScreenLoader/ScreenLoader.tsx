import { ScaleLoader } from 'react-spinners'
import { theme } from '@config'

export const ScreenLoader = () => (
  <div className="w-full h-full bg-secondary-dark flex justify-center items-center fixed top-0 left-0">
    <ScaleLoader color={theme.colors.primary.light} />
  </div>
)
