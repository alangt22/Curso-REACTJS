import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from './routes/Home.jsx'
import Contact from './routes/Contact.jsx'

// 2- criando provider
import { CounterContextProvider } from './context/CounterContext.jsx'


// 5- contexto completo
import { TitleColorContextProvider } from './context/TitleColorContext.jsx'


import { 
   createBrowserRouter,
   RouterProvider,
   Navigate
  } from "react-router-dom"
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,

    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterContextProvider>
      <TitleColorContextProvider>
        <RouterProvider router={router}/>
      </TitleColorContextProvider>
    </CounterContextProvider>
  </StrictMode>
)
