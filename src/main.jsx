import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from "./layouts/MainLayout"
import MainLayoutMovie from "./layouts/MainLayoutMovie"
import ErrorPage from "./pages/ErrorPage"
import HomePage from "./pages/HomePage"
import { createBrowserRouter, RouterProvider } from 'react-router'
import MoviePage from './pages/MoviePage'

const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout/>,
    children:[
        {
          index: true,
          element: <HomePage/>
        }
    ],
    errorElement: <ErrorPage/>
  },
  {
    path:'/',
    element:<MainLayoutMovie/>,
    children:[
      {
        path:'movie',
        element:<MoviePage/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)