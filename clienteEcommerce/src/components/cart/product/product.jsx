import Cart2 from "../../../assets/Cart2.png"
function Product({product}){
    
    return(
        <div className="productDiv" >
            <img  style={{
                height:"100%",
                width:100 ,
            }} src={Cart2} alt="img"  />
            <span>{product.title}</span>
            <span>{product.quantity}</span>
            <span style={{paddingRight:20}} >$ {product.price}</span>
        </div>
    )
}
export default Product