import React from 'react'



   

const Events = () => {
    const handleClick = () => {
        console.log("executou")
    }

     //8-função de renderização 

    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso</h1>
        }else {
            return <h1>Renderizando outra coisa</h1>
        }
    };

 //  return 10 > 2 && <p>carregando...</p>;
  return (
    <div>
        <div>
            <button onClick={() => console.log("testando um evento")}>
                Clique aqui
                </button>
        </div>
        {/*7-evento com função*/}
        <div>
            <button onClick={handleClick}>Clique aqui - com função</button>
        </div>
        {/*8-funçao com renderizacao*/}
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events