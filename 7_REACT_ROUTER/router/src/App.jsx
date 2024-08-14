
import './App.css'
import { Outlet } from 'react-router-dom'
//5- likn entre paginas
import NavBar from './components/NavBar'
//seach paramets
import SearchForm from './components/SearchForm'

function App() {
  
  return (
    <>
      <div>
        <NavBar/>
        <SearchForm />
        <Outlet/>
        <p>Footer</p>
      </div>
    </>
  )
}

export default App
