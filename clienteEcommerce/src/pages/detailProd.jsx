import { useContext, useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import DetaildCard from "../components/detailCard/detailCard"
import ContadorCompra from "../components/contadorCompra/contadorComp"
import { CircularProgress } from "@mui/material"
import cart2 from '../assets/Cart2.png'
import Loading from "../components/loading/loadingComp"
import { userInfoContext } from "../context/context"
import { updateCounter } from "../functions/cartCounter"
function DetailProd(){
    const[prod,setProd]=useState([])
    const[loading,setLoading]= useState(true)
    const{user,cart,setCart,change,setChange} = useContext(userInfoContext)
    const handleFunci= async (e)=>{
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const formJson = Object.fromEntries(formData.entries())
        const quant = parseInt(formJson.Select)
        const send = JSON.stringify({"quant":quant})
        console.log(prod._id)
        if(!prod._id) return alert("Not found")
        const data = await fetch(`http://localhost:8080/api/cart/userCart/products/${prod._id}`
        ,{
            method:"POST",
            credentials: 'include',
            headers:{"Content-Type":"application/json"},
            body:send
        })
        if(!data) return;
        updateCounter(prod,cart,setCart,quant,'sum')
        setChange(!change)
        
    }
     const {Pid} = useParams()
     useEffect(()=>{
         const apiCall = async()=>{
             const dataJson = await fetch(`http://localhost:8080/api/productos/${Pid}`)
             const data = await dataJson.json()
             setProd(data.payload)
             setLoading(false)
         }
         apiCall()
     },[])
     if(user == undefined){
        window.location.href = 'http://localhost:5173/login'
     }
     
     if(loading){
        return(
            <Loading />
        )
     }
return(
    <div className="Div_inicial_detail">
        <div> 
            <div className="divImageDetail" style={{
                backgroundImage:`url(${prod.thumbnail ? prod.thumbnail : cart2})`,
                width:"100%",
                height:"100%"
            }}></div>
            <DetaildCard prod={prod} />
        </div>
        <div style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center"
        }}>
        <div className="divDescription">
            <h2>Description: </h2>
            <p>{prod.description}</p>
        </div>
        <ContadorCompra handleFunc={handleFunci} />
        </div>
    </div>
)
}
export default DetailProd