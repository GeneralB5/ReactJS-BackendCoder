import { Link } from "react-router-dom"
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
function FooterDescriptDiv(){
return(
    <div style={{
        margin:20,
        backdropFilter:'blur(10px)',
        boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
        borderRadius:20,
    }}>
        <div>
        <h2>Conocenos</h2>
        <p>Somos un empresa dedicada al comercio internacional y a la libre exportacion de bienes</p>
        </div>
        <div>
        <h2>Pagina</h2>
        <Link to={'http://localhost:5173/'}>Home</Link>
        <Link to={'http://localhost:5173/login'}>login & Register</Link>
        <Link to={'http://localhost:5173/productos'}>Productos</Link>
        <div style={{
            display:"-webkit-box"
        }}>
            <PhoneInTalkIcon style={{
                
                width:20,
                height:20
            }}/>
            <p>11-1234-5678</p>
        </div>
        <div style={{
            borderRadius:"50%",
            boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px",
            margin:'auto'
        }} className="DivLogo" ></div>
        </div>
    </div>
)
}
export default FooterDescriptDiv