const Temperatura = () => {
    const kelvin = (k) =>{
        let c = k * 9
        let f = k * 10
        
        return {c, f}
    }

    let {celsius, farenheit} = kevin(100)
    
    return (
        <div>
            <h1>kelvin para celsius: {celsius}</h1>
            <h1>kelvin para celsius: {farenheit}</h1>
        </div>
    )
}

export default Temperatura