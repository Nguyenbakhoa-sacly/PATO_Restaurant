import { RouterProvider, createBrowserRouter }
  from 'react-router-dom'
import App from '../App'
import { Home, Menu } from '../pages'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/menu",
        element: <Menu />
      },
    ]
  }
])

export default router