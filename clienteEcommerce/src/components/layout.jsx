import HomeIcon from "@mui/icons-material/Home"
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconGeneratorCir from "./icons/icons.jsx";
import AddBoxIcon from '@mui/icons-material/AddBox';
import SearchBar from "./searchBar/searchBar"
import { useContext, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom";
import { loginContext, roleContext, userInfoContext } from "../context/context.jsx";
import useScreenSize from "../hook/customScreenSize.jsx";
import DropDownIconMenu from "./icons/dropDownIcon.jsx";
import FooterDescriptDiv from "./footerContent/footerDescrDiv.jsx";
import FooterSocialDiv from "./footerContent/footerSocialDiv.jsx";

function Layout({children}){
    let { pathname } = useLocation()
    const [change, setChange] = useState("")
    const [headclass , setHeadClass] = useState(pathname=="/"? "Head":"Head normal" )
    const {isLogged} = useContext(loginContext)
    const {user} = useContext(userInfoContext)
    const {roles} = useContext(roleContext)
    const size = useScreenSize()
    
    window.addEventListener("scroll", () =>{
        if(pathname === "/"){
            setHeadClass("Head abajo")
            }
            if(window.scrollY === 0 && pathname === "/" ){
                setHeadClass("Head")    
                }
        if(pathname != "/"){
                setHeadClass("Head normal")
             }
    })
    useEffect(()=>{
        setHeadClass(pathname=="/"? "Head":"Head normal" )
    },[pathname])
    console.log()
return(
<>
    <header style={{
        zIndex:1
    }} className={headclass}>
        <Link to={`http://localhost:5173/`} >
        <div className="DivLogo" >
        </div></Link>   
        <div >
            <nav>
                <SearchBar placeholder={"Escriba aqui"} onchange={(e)=>setChange(e.target.value)} />
            </nav>
        </div>
        {size.width >390? 
        <div className="optionsContainer">
            <Link style={{textDecoration:'none'}} to={`http://localhost:5173/productos`} ><IconGeneratorCir variableClass='DivIconModifBlue' icon={<HomeIcon />}  /></Link>
            <Link style={{textDecoration:'none'}} to={Object.entries(user).length > 0 ?"http://localhost:5173/user/cart":"http://localhost:5173/login" }><IconGeneratorCir variableClass='DivIconModifPink' type={'cart'} icon={<ShoppingCartIcon />} /></Link>
            <Link style={{textDecoration:'none'}}  to={Object.entries(user).length > 0 ?"http://localhost:5173/user/information":"http://localhost:5173/login" } ><IconGeneratorCir variableClass='DivIconModifWhite' icon={<PersonIcon />}/></Link>
            {user != undefined? roles.includes(user.role)? <Link to={Object.entries(user).length > 0?"http://localhost:5173/productos/create":"http://localhost:5173/login" } ><IconGeneratorCir variableClass='DivIconModifyellow' icon={<AddBoxIcon />}/></Link>
            :"":''}
        </div> 
        : 
        <DropDownIconMenu />
        }
    </header>
    {children}
    <footer style={{
        display:"flex",
        borderTop:'1px solid black',
        width:'100%',
        backgroundImage:'url(https://fxsanmarti.com/cajas_carton/wp-content/uploads/2019/12/cajas-navidad-2-800x540.jpg)',
        backgroundRepeat:"no-repeat",
        backgroundSize:'cover',
    }}>
        <FooterDescriptDiv />
        <FooterSocialDiv />
    </footer>
</>
)
}
export default Layout