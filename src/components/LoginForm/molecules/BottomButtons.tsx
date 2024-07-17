import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@gonchar44/react-components-pack'

interface IBottomButtonsProps {
  isSubmitDisabled: boolean
}

export const BottomButtons: FC<IBottomButtonsProps> = ({
  isSubmitDisabled
}) => {
  const navigate = useNavigate()

  return (
    <div className="w-full flex items-center gap-x-2">
      <Button $isFullWidth type="submit" disabled={isSubmitDisabled}>
        Log in
      </Button>

      <Button
        $isFullWidth
        $variant="secondary"
        onClick={() => navigate('/create-account')}
      >
        Create account
      </Button>
    </div>
  )
}
