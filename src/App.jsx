import React from 'react'
import Navbar from './components/Navbar'

import Body from './components/Body'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Watch from './components/Watch'
import Feed from './components/Feed';

const appRouter = createBrowserRouter([
  {
    path: "/", element: <Body />,
    children: [
      {
        path: "/",
        element: <Feed />
      },
      {
        path: "/watch",
        element: <Watch />
      }
    ]
  }
])

const App = () => {
  return (
    <>

      <Navbar />
      <RouterProvider router={appRouter} />

    </>
  )
}

export default App
