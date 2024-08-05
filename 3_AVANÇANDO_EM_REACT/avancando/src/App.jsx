import './App.css'

// 2- imagem em assets
import nigth from './assets/night.jpg'

// 3 - useStates
import Data from './components/Data'

// 4 - renderização de lista
import ListRender from './components/ListRender'

//7- render condicional
import ConditionalRender from './components/ConditionalRender'

//8-props
import ShowUserName from './components/ShowUserName'

//9-desestruturando props
import CarDetails from './components/CarDetails'



//11 - renderização de listas com componentes
const cars = [
  {id: 1, brand: "Ferrari", color: "Amarelo", km: 0},
  {id: 2, brand: "KIA", color: "Branco", km: 20000},
  {id: 3, brand: "Renault", color: "Azul", km: 32000},
]


//12-fragments
import Fragment from './components/Fragment'

//13-children
import Container from './components/Container'

//14-função em prop
import ExecutionFunction from './components/ExecutionFunction'

//15-state lift
import { useState } from 'react'
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'


function App() {

  //14-função prop
  function showMessage() {
    console.log("evento do componente pai")
  }
  //15-state lift
  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  }
  
  return (
    <>
      <div style={{paddingBottom: "500px"}}>
        <h1>Avançando em React</h1>
        {/* 1- imagem em public*/}
        <img src="/img.jpg" alt="imagem" />
        {/*2 - imagrm em assets */}
        <img src={nigth} alt="imagem" />
        {/*3- useStats*/}
        <Data />
        {/*4-renderizacao de lista*/}
        <ListRender />
        {/*7-render condicional */}
        <ConditionalRender />
        {/*8-props */}
        <ShowUserName name="Alan"/>
        {/*9-desestruturando props */}
        <CarDetails brand="VW" km={999} color="Vermelho"/>
        {/*10- reaproveitamento de componnentes */}
        <CarDetails brand="Fiat" km={123444} color="Branco"/>
        <CarDetails  color="Azul" brand="Audi" km={9987} />
        {/*11-renderização de listas com componentes*/}
        {cars.map((car) => (
          <CarDetails 
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}/>
        ))}
        {/*12-fragments */}
        <Fragment />
        {/*13-children*/}
        <Container>
          <p>Alguma coisa</p>
        </Container>
        <Container>
          <div>
            <h2>Teste</h2>
            <p>Meu container</p>
          </div>
        </Container>
        {/*14- função em prop*/}
        <ExecutionFunction myFunction={showMessage}/>
        {/*15-state lift*/}
        <Message msg={message}/>
        <ChangeMessage handleMessage={handleMessage}/>
      </div>
    </>
  )
}

export default App
