import { useContext, useEffect, useState } from "react"
import ListContainer from "../components/listContainer/listContainer.jsx"
import { CircularProgress } from "@mui/material"
import Aside from "../components/aside/aside.jsx"
import FooterHomePage from "../components/footerHomePage/footerHomePage.jsx"
import { redirect, useParams } from "react-router-dom"
import { prodsContext } from "../context/context.jsx"
function ProductsPage(){
    const [loading,setLoading] = useState(true)
    const [count,setCount]= useState(0)
    const {prods , setProds} = useContext(prodsContext)
    const {category} = useParams()    
    //divide arrays en tamaño deseado
    const divideArrays =(array,tamanoGrupo)=>{
      let resultado = [];
      for (let i = 0; i < array.length ; i += tamanoGrupo) {
          let grupo = array.slice(i, i + tamanoGrupo);
          resultado.push(grupo);
      }
      return resultado;
    }

    const fetchData = async ()=>{
      try {
        const data = await fetch('http://localhost:8080/api/productos/get')
    if(data){
      const dataPars = await data.json()    
      setProds(dataPars.payload)
      setLoading(false)
      }  
      } catch (error) {
        console.log(error) 
      }
      }
      useEffect(()=>{   
        fetchData()        
      },[])

    if(loading){
       redirect("/login")
       return(
       <div style={{
        display:"flex",
        width:"100%",
        height:500,
        justifyContent:"center",
        alignItems:"center"
       }}>
       <CircularProgress thickness={5} size={70} />
       </div>
       )
      }
      const arrayProds = category != undefined? divideArrays(prods.filter(prod => prod.category == category),5) : divideArrays(prods,5)
    return(
      <div style={{backgroundColor:"#c4c4c49f", paddingTop:40}} >
        <div style={{display:"flex",background:'transparent'}}>
          <Aside />
          <div className="ProdContainer">
                {arrayProds.length == 0 ?
                  <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:400}}>
                  <h2 style={{fontSize:'30px'}}>Lo lamento no existen productos de esta categoria</h2>
                </div>
                  :<ListContainer products={arrayProds[count]} />}
          </div>
        </div>
      <FooterHomePage count={count} setCount={setCount} maxLenght={arrayProds.length - 1} />
      </div>
    )
}
export default ProductsPage