import './App.css'

//2- css de componente
import MyComponent from './Components/MyComponent'

//3-css modules
import Title from './Components/Title'

function App() {
  // 4 - css inline dinamico
  const n = 15

  //5-classes dinamica
  const redTitle = true
  

  return (
    <>
      <div>
        {/*1- css global*/}
        <h1>Css no React</h1>
        {/*2- css do componente */}
        <MyComponent />
        <p>pegou o css do componente</p>
        {/*3-inline style*/}
        <p style={{color: "blue", padding: "25px", borderTop:"1px solid blue"}}>Este elemento tem estilo inline</p>
        {/* 4- inline style dinamico*/}
        <h2 style={n > 10 ? {color: "purple"}: {color: "magenta"}}>
          CSS dinamico
        </h2>
        <h2 style={n > 20 ? {color: "purple"}: {color: "magenta"}}>
          CSS dinamico 2
        </h2>
        {/*5-classes dinamicas */}
        <h2 className={redTitle ? "red-title" : "title"}> Este titulo vai ter uma classe</h2>
        {/*6-css modules */}
        <Title />
      </div>
    </>
  )
}

export default App
