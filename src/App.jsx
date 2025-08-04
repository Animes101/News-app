import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

import './App.css'
import Root from './router/Root'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Career from './pages/Career'
import SingIn from './pages/SingIn'
import SingUp from './pages/SingUp'

function App() {

  const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '/', element: <Home /> },
      {path:'/about', element:<About />},
      {path:'/career', element:<Career />},
      {path:'/singin', element:<SingIn />},
      {path:'/singup', element:<SingUp />}
      
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
 
  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
