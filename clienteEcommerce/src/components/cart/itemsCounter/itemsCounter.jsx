import { useContext, useEffect, useState } from "react"
import { userInfoContext } from "../../../context/context"
import { cartCounter } from "../../../functions/cartCounter"

function ItemsCounter({}) {
    const [count,setCount] = useState('')
    const {cart,change} = useContext(userInfoContext)
    
    useEffect(()=>{
        console.log(cart)
        setCount(cartCounter(cart))
    },[change])
    return(
        <div  style={count > 0?{
            width:20,
            height:20,
            borderRadius:'50%',
            backgroundColor:"red",
            position:"relative",
            fontFamily:'system-ui',
            display:"flex",
            justifyContent:"center",
            alignItems:'center',
            right:6
        }:{display:'none'}}>
            <span style={{
                textDecoration:'none',
                color:"#000"
            }} >{count}</span>
        </div>
    )
}
export default ItemsCounter