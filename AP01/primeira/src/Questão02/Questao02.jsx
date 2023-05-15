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
    // usamos a variável imgAtual para definir o caminho da imagem a ser exibida com base no valor de virar. 
    // Se virar for true, a imagem de costas irá aparecer; se não, a imagem frontal será exibida.

    return (
        <div>
            <h2>Questão 2</h2>
            <img src={imgAtual} alt="pikachu" style={{ width: "400px" , border: "2px"}}
/>
            <button onClick={virando}>virar</button>
            {/* Quando o botão é pressionado, chamamos a função virando, 
            que alterna o valor de virar usando setVirar(!virar), fazendo  a imagem seja atualizada e alternada entre frente e costas. */}

        </div>
    )
}

export default Questao02

