import FunctionB from "./FunctionB"

const FunctionA = () => {
    return(
        <div>
            <h1>Compornente A</h1>
            <FunctionB nome="fulano" sobrenome="ciclano"/>
            <FunctionB nome="fula" sobrenome="cicl"/>
            <FunctionB nome="fno" sobrenome="cno"/>
        </div>
    )
}

export default FunctionA