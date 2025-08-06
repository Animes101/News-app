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
import Details from './pages/Details'
import AuthContext from './context/AuthContext'
import PrivetRoute from './router/PrivetRoute'

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
      {path:'/singup', element:<SingUp />},
      {path:'/news/:id', element:<PrivetRoute><Details /></PrivetRoute>}
      
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
 
  return (
    <>
       <AuthContext>
          <RouterProvider router={router} />
       </AuthContext>
    </>
  )
}

export default App
