import { useContext} from "react"
import { userInfoContext } from "../../context/context"
import ItemsCounter from "../cart/itemsCounter/itemsCounter"

function IconGeneratorCir({variableClass,icon,click,style,type}){
    const {cart} = useContext(userInfoContext)
    const classCart = type =='cart' && cart.length > 0 ? 'cartIcon':''
    const classed = variableClass + " DivIconModif "+ classCart
return(
    <div>
    {type == 'cart' && cart.length > 0? <ItemsCounter /> : ''}
    <div style={style}  className={classed} onClick={click?click:()=>{}}>
        {icon}
    </div>
    </div>
)
}
export default IconGeneratorCir