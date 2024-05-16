import Cart2 from "../../../assets/Cart2.png"
import CloseIcon from '@mui/icons-material/Close';
import { handlePullProd } from "../../../functions/fetch.jsx";
import { useContext } from "react";
import { userInfoContext } from "../../../context/context.jsx";
function Product({product}){
    const {cart,setCart,change,setChange} = useContext(userInfoContext)
    const SrcSource = product.thumbnail.split('.').length > 1? product.thumbnail : undefined;

    const handlePull = async(e, Pid)=>{
        e.preventDefault()
        await handlePullProd(product._id)

        const cartCopy = cart
        const index = cartCopy.findIndex((element) => element._id == Pid)
        const newCart = cartCopy.splice(index,1)
        console.log(cartCopy)
        setCart(cartCopy)
        setChange(!change)
    }

    return(
        <div className="productDiv" >
            <picture>
                <source srcSet={SrcSource} type="image/jpeg" />
                <img  style={{
                height:"100%",
                width:100 ,
            }} src={Cart2} alt="img"  />
                
            </picture>
            
            <span>{product.title}</span>
            <span>{product.quantity}</span>
            <span style={{paddingRight:20}} >$ {product.price}</span>
            <button onClick={(e)=>handlePull(e,product._id)} style={{
                width:'inherit',
                height:'inherit',
                background:'transparent',
                border:'none',
                color:'#000',
                margin:0
                }}>
            <CloseIcon style={{
                color:'#000',
                cursor:'pointer',
                width:30,
                height:30
            }}  /></button>
        </div>
    )
}
export default Product