const Filho = ({altura, peso}) =>{

    const calcularImc = (altura, peso) => {
        peso/altura*altura
    }

    const renderizarMensagem = (imc) => {
        if(imc < 18){
            return (
                <h3>abaixo do peso</h3>
            )
        }else if(imc > 25){
            return (
                <h3>acima do peso</h3>
            )
        }
        return <h3>peso ideal</h3>
    }

    const imc = calcularImc(altura, peso)

    return(
        <div>
            <h1>IMC: {imc.toFixed(2)}</h1>
            {renderizarMensagem}
        </div>
    )
}

export default Filho