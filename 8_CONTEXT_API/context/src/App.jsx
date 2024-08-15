import { Outlet } from 'react-router-dom'
import './App.css'

import NavBar from './components/NavBar'

function App() {
 

  return (
    <>
      <div>
        <NavBar/>
        <h1>Context API</h1>
        <Outlet/>
      </div>
    </>
  )
}

export default App
