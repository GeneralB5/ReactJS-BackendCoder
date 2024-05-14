import PersonOffIcon from '@mui/icons-material/PersonOff';
import LogoutIcon from '@mui/icons-material/Logout';
import { handleLogout } from '../../../functions/fetch';
import { useContext } from 'react';
import { userInfoContext } from '../../../context/context';
function DivButtonsOut({onClickDelete}){
    const {setUser,setCart} = useContext(userInfoContext)
    const handleLogs = async(e,func)=>{
        await func(e)
        setUser({})
        setCart([])
        window.location.href = 'http://localhost:5173/login'
        alert('solo funciona del todo si se usa el branch development por cambios que no pushee')
    }
return(
    <div className='DivButtonsDelete divUserInfo ' style={{height:100,marginTop:0}}>
                <button className="deleteUserButton" onClick={(e)=>handleLogs(e,handleLogout)}>
                    <LogoutIcon style={{
                        color:'red',
                        width:30,
                        height:30,
                        margin:'auto'
                    }} />
                    Log-out
                </button>

                <button  className="deleteUserButton" >
                    <PersonOffIcon style={{
                        color:'red',
                        width:30,
                        height:30,
                        margin:'auto'
                    }} />
                    delete user
                </button>
    </div>
)
}
export default DivButtonsOut