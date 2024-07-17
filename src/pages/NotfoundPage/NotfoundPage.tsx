import { useNavigate } from 'react-router-dom'
import { Button } from '@gonchar44/react-components-pack'

export const NotfoundPage = () => {
  const navigate = useNavigate()

  return (
    <div className="w-1/2 py-40 mx-auto">
      <section className=" font-bold text-center">
        <h2 className="text-h2 text-secondary-error">404</h2>

        <p className="mb-5">
          Sorry! The page you are looking for cannot be found... 🥲
        </p>

        <Button onClick={() => navigate('/')}>Go Back</Button>
      </section>
    </div>
  )
}
