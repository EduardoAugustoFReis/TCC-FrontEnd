import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'

const LayoutPage = () => {
  return (
    <LayoutContainer>
      <main>
        <Outlet />
      </main>

    </LayoutContainer>
  )
}

export default LayoutPage
