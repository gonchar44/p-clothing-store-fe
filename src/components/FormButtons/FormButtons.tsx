import { FC } from 'react'
import { Button } from '@gonchar44/react-components-pack'

interface IFormButtonsProps {
  isSubmitDisabled: boolean
  submitText: string
  secondaryText: string
  secondaryAction: () => void
}

export const FormButtons: FC<IFormButtonsProps> = ({
  isSubmitDisabled,
  submitText,
  secondaryText,
  secondaryAction
}) => (
  <div className="w-full flex items-center gap-x-2">
    <Button $isFullWidth type="submit" disabled={isSubmitDisabled}>
      {submitText}
    </Button>

    <Button $isFullWidth $variant="secondary" onClick={secondaryAction}>
      {secondaryText}
    </Button>
  </div>
)
