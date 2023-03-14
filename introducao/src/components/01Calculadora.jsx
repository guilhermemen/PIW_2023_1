const Calculadora = () => {

    function somar(x,y){
        return x + y
    }

    const subtrair = (x,y) => {
        return x - y
    }

    const multiplicar = (x,y) => x * y

    const dividir = (x,y) => x/y

    const renderizar = () => <h1>JSX função interna</h1>

    return (
        <div>
            <h1>O resultado da soma é: {somar(20,4)} </h1>
            <h1>O resultado da soma é: {subtrair(20,4)} </h1>
            <h1>O resultado da soma é: {multiplicar(20,4)} </h1>
            <h1>O resultado da soma é: {dividir(20,4)} </h1>
            {renderizar()}
        </div> 
    )
}

export default Calculadora