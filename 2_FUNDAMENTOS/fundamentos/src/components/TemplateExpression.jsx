//  template expression

const TemplateExpression = () => {
    const name = "Alan"
    const data = {
        age: 27,
        job: "Programador"
    }
  return (
    <div>
        <p> A soma e { 2+2 }</p>
        <h3>Bem vindo {name}</h3>
        <p>Sua idade e {data.age} anos e sua profissão e {data.job}</p>
    </div>
  )
}

export default TemplateExpression