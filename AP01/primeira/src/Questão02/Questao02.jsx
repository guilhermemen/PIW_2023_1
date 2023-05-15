import react, { useState} from "react";

const Questao02 = () => {

    const [virar, setVirar] = useState(false);
    //criando duas variáveis virar e desvirar
    /*useState é uma variável state, ele retorna um par de valores o state como por exemplo no virar e setVirar*/
    

    const virando = () => {
        setVirar(!virar);
    }

    const imgFrente = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    const imgCosta = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"
    const imgAtual = virar ? imgCosta : imgFrente;

    return (
        <div>
            <h2>Questão 2</h2>
            <img src={imgAtual} alt="pikachu" style={{ width: "400px" , border: "2px"}}
/>
            <button onClick={virando}>virar</button>
            {/* onclick é um botão de ação, quando clicado ele faz a chamada e faz uma mudança no userState */}

        </div>
    )
}

export default Questao02

