const Temperatura = () => {

    const celsiusParaFarenheit = (celsius) => (9*celsius+160)/5
    const farenheitParaCelsius = (farenheit) => (5*farenheit-160)/5

    const kelvin = (kelvin) =>{
        let celsius = kelvin - 273;
        let farenheit = 9 * kelvin - 297
        
        return {celsius, farenheit}
    }

    let c = 30
    let f = 54
    let k = 0

    let {celsius, farenheit} = kelvin(k)

    return (
        <div>
            <h1>A temperatura {c} em Celsius é em farenheit: {celsiusParaFarenheit(c)} </h1>
            <h1>A temperatura {f} em farenheit é em celsius: {farenheitParaCelsius(f)} </h1>
            <h1>A temperatura em kelvin é: {kelvin(k).celsius} </h1>
        </div>
    )
}

export default Temperatura