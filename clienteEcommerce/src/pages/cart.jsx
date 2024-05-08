import { useContext, useEffect, useState } from "react"
import cartImage from '../assets/cajaVacia.png'
import ListCart from "../components/cart/listCart"
import ResumenCompra from "../components/cart/compra/resumenCompra"
import { userInfoContext } from "../context/context"
import Loading from "../components/loading/loadingComp"
function CartPage(){
const [cartProds , setCartProds] = useState([])
const [loading , setLoading] = useState(true)
const handleTotal = ()=>{
    let total = 0
    cartProds.map( prod =>{
        total += prod.price *  prod.quantity
    })
    return total
}

const {user} = useContext(userInfoContext)
useEffect(()=>{
    const fetchData = async()=>{
        const data = await fetch(`http://localhost:8080/api/cart/userCart`
         ,{
             method:"GET",
             credentials: 'include',
         })
         if(!data) return;
         const dataJson = await data.json()
         console.log(dataJson.payload)
         setCartProds(dataJson.payload)
         setLoading(false)
    }
    fetchData()
},[])
if(loading) return(<Loading />)
if(cartProds.length == 0 || user == undefined){
    return(
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            margin:'10px auto',
            
            backgroundImage:`url(${cartImage})`,
            backgroundRepeat:"no-repeat",
            backgroundSize:"contain",
            width:"100%",
            height:450
        }}>
            <h1 className="h1NoProducts">Lo siento no tienes productos añadidos ....</h1>
        </div>
    )
}

return(
<div className="divCart" >
<ListCart products={cartProds}/>
<ResumenCompra dineroTotal={handleTotal()} cart={cartProds} />
</div>
)}
export default CartPage