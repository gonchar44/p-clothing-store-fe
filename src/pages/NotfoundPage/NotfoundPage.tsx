import { Link } from '@components'

export const NotfoundPage = () => (
  <div className="w-1/2 py-40 mx-auto">
    <section className=" font-bold text-center">
      <h2 className="text-h2 text-secondary-error">404</h2>

      <p className="mb-5">
        Sorry! The page you are looking for cannot be found... 🥲
      </p>

      <Link text="Go Back" path="/" />
    </section>
  </div>
)
