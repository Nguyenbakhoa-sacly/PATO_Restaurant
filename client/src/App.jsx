
import { Outlet } from 'react-router-dom'
import './App.scss'
import { Header, Footer } from './components'
const App = () => {

  return (
    <>
      <div className='bg-prigmayBG'>
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div >
    </>
  )
}

export default App
