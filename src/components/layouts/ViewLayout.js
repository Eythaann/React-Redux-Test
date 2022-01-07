import { Outlet } from 'react-router-dom'
import { Header } from '.'

export const ViewLayout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}
