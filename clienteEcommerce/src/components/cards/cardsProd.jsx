import logo from "../../assets/Cart2.png"
import { Link } from "react-router-dom"
function Cards({product}){
return(
    <Link to={`http://localhost:5173/productos/${product._id}`} className="divCardsInfo" >
        <img className="imgInfo" src={logo} />
        <div className="divInsideInfo">
            <p>{product.title.substring(0,20)}</p>
            <p>${product.price}</p>
        </div>
        <div style={{
            height:200,
            borderTopLeftRadius:0,
            borderTopRightRadius:0,
            borderBottomLeftRadius:5,
            borderBottomRightRadius:5,
            display:"flex",
            flexDirection:"column",
            gap:0
            }}>
                <h2 style={{fontSize:18,alignSelf:'flex-start'}}>Description</h2>
            <p style={{
                fontSize:16,
                overflow:"hidden",
                textOverflow:'ellipsis',
                WebkitLineClamp:5,
                WebkitBoxOrient:'vertical',
               textAlign:"center",
               width:'100%'
            }} >{product.description}</p>
        </div>
    </Link>
)
}
export default Cards