import { useContext, useEffect } from "react";
import { userInfoContext } from "../context/context";

function SuccesPayment(){

    const {user} = useContext(userInfoContext)
    const handleClick = (e)=>{
        e.preventDefault()
        window.location.href = 'http://localhost:5173/productos'
    }
    const handleFetch = async()=>{
        try {
            const data = await fetch(`http://localhost:8080/api/cart/${user.cartId}/purchase`,
            {
                method:"POST",
                credentials:'include',
                headers:{"Content-Type":"application/json"}
            })
            const dataJson =await data.json()
            console.log(dataJson)
        } catch (error) {
            console.log(error)
        }
    }
useEffect(()=>{
    handleFetch()
},[])
return(
    <div className="succesfulPayment" style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        fontFamily:'system-ui', 
        height:500
    }}>
    <h2 style={{
        fontSize:30
    }} >Muchas gracias por la compra</h2>
    <button style={{height:70}} className="buttonPayment" onClick={handleClick} > Volver a inicio</button>
    </div>
)
}
export default SuccesPayment