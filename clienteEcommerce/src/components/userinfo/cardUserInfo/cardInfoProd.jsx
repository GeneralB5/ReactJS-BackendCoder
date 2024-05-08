import cart2 from "../../../assets/Cart2.png"
function CardProdInfo({prod}){
return(
    <div className=" infoDivCard">
        <div style={{
            width:100,
            height:"100%",
            backgroundImage:`url(${prod.thumbnail != undefined? prod.thumbnail : cart2})`,
            backgroundSize:"contain",
            backgroundRepeat:"no-repeat",
            backgroundColor:"white",
            borderRadius:14
        }}>
        </div>
        <p>{prod.title}</p>
        <p>{prod.price}</p>
        <p>{prod.stock}</p>
        
    </div>
)
}
export default CardProdInfo