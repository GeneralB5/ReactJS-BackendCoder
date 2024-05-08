import { Link } from "react-router-dom"
import IconGeneratorCir from "../icons"
import HomeIcon from "@mui/icons-material/Home"
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useContext } from "react";
import { loginContext, userInfoContext } from "../../../context/context.jsx";
function DropDown(){
    const {isLogged} = useContext(loginContext)
    const {user} = useContext(userInfoContext)
return(
    <li className="menuDropdown">
            <Link to={`http://localhost:5173/`} ><IconGeneratorCir variableClass='DivIconModifBlue' icon={<HomeIcon />}  /></Link>
            <Link to={isLogged?"http://localhost:5173/user/cart":"http://localhost:5173/login" }><IconGeneratorCir variableClass='DivIconModifPink' icon={<ShoppingCartIcon />} /></Link>
            <Link to={isLogged?"http://localhost:5173/user/information":"http://localhost:5173/login" } ><IconGeneratorCir variableClass='DivIconModifWhite' icon={<PersonIcon />}/></Link>
            {user != undefined? roles.includes(user.role)? <Link to={user?"http://localhost:5173/productos/create":"http://localhost:5173/login" } ><IconGeneratorCir variableClass='DivIconModifyellow' icon={<AddBoxIcon />}/></Link>
            :"":''}
    </li> 
)
}
export default DropDown