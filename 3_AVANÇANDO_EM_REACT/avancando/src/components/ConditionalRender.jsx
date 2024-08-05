import React from 'react'

const ConditionalRender = () => {
    const x = 5;

    const name = "joao"

  return (
    <div>
        {/*7- render condicional */}
        <h3>Isso sera Exibido?</h3>
        {x > 2 && <p>Se x for true Sim! </p>}
        {/*8- else */}
        <h3>Render ternario</h3>
        {name === "joao" ?(
            <div>
                <p>Ola joao</p>
            </div>
        ) : (
            <div>
                <p>Nome nao encontrado</p>
            </div>
        )}
    </div>
  )
}

export default ConditionalRender