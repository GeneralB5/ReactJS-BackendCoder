import InputPayment from "./inputPayment.jsx"
import addDotEveryThreeCharacters from "../../../functions/moneyCounter.jsx"
function FormPayment({money,submitFuncion,setState,state}){
    return(
        <form className="formPayment">
            <div style={{display:"flex",gap:2}}>
            <InputPayment name={"Numero de tarjeta"} placeHolder={"0123-4567-8910-1112"} Style={"NumeroDeTarjetaP"} setState={setState} state={state} maximun={16} />
            <InputPayment name={"CVC"} placeHolder={"123"} Style={"CVCP"} setState={setState} state={state} maximun={3} />
            </div>
            <div style={{display:"flex",gap:2}}>
            <InputPayment name={"Nombre"} placeHolder={"12/34"} Style={"NombreEXP"} setState={setState} state={state} />
            <InputPayment name={"EXP"} placeHolder={"12/34"} Style={"NombreEXP"} setState={setState} state={state} maximun={4} />
            </div>
            <div className="DivButtonPayment">
            <button className="buttonPayment"> Comprar </button>
            <span style={{
                margin:"auto",
                fontSize:20,
                fontWeight:400,
                letterSpacing:.4,
                textDecoration:"underline",
                color:'#3f3838'
            }}>Total:{addDotEveryThreeCharacters(1233456)}</span>
            </div>
        </form>
    )
}
export default FormPayment