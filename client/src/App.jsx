
import { Outlet } from 'react-router-dom'
import './App.scss'
import { Header, Footer } from './components'
const App = () => {

  return (
    <>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App
