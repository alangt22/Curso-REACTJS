import { useState } from "react"

const Data = () => {

    let someData = 10;
    const [anotherNumber, setAnotherNumber]  = useState(15)
    const [firstName, setTradeName] = useState("Alan")
    const [origiName] = useState("Alan")


  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar variavel</button>
            <div>
                <p>Valor: {anotherNumber}</p>
                <button onClick={() => setAnotherNumber(25)}>Mudar State</button>
            </div>
            <div>
                <p>Nome: {firstName}</p>
                <button onClick={() => setTradeName("Nunes")}>Troque o nome</button>
                <button onClick={() => setTradeName(origiName)}>Voltar  nome</button>
            </div>
        </div>
    </div>
  )
}

export default Data