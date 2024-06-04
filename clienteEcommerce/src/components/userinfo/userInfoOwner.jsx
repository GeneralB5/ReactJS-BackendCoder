import { CircularProgress } from "@mui/material"
import { useEffect, useState } from "react"
import CardProdInfo from "./cardUserInfo/cardInfoProd"
function ListOwnerCard({ownerProd}){
const [prods,setProds] = useState([])
 useEffect(()=>{
 const fetchData = async()=>{
     const dataFetch = await fetch(`http://localhost:8080/api/productos/owner/products`,{
         method:"GET",
         credentials: 'include',
     })
     const dataJson = await dataFetch.json()
     setProds(dataJson.payload)
 }
fetchData()
 console.log(prods)
 },[ownerProd])

if(!Array.isArray(prods)){
    return(
        <div style={{
            display:"flex",
            width:"100%",
            height:500,
            justifyContent:"center",
            alignItems:"center"
           }}>
           <h2>No posee ningun producto que este actualmente a la venta</h2>
           </div>
    )
}
return(
    <div style={{marginBottom:10}} className="divListOwnedProducts" >
        <h2 >Productos que posee</h2>
        <div className="DivCategoryListCart">
        <p>Img</p>
        <p>Nombre</p>
        <p>Precio</p>
        <p>Stock</p>
        </div>
        { prods.map(prod=> <CardProdInfo key={prod._id} prod={prod}/> )}
    </div>
)
}
export default ListOwnerCard