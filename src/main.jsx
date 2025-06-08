import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from './pages/Producus.jsx'
import Features from './pages/Features.jsx'
import About from './pages/About.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/features',
    element: <Features />,
  },
  {
    path: '/about',
    element: <About />,
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
