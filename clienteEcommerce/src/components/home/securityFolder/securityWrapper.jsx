import SecurityCard from "./cardSecurity/cardSecurity.jsx"
import SecurityIcon from '@mui/icons-material/Security';
import PeopleIcon from '@mui/icons-material/People';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
function SecurityWrapper({}){
    return(
        <div className="DivSecurity">
                   <SecurityCard Icon={SecurityIcon} word={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, iure. Aspernatur est autem assumenda cumque maiores minima expedita similique. ?"}/> 
                    <div className="borderDivSec" style={{height:310,backgroundColor:"rgb(117 117 117)",width:1}}></div>
                   <SecurityCard Icon={PeopleIcon} word={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, iure. Aspernatur est autem assumenda cumque maiores minima expedita similique. ?"}/> 
                    <div className="borderDivSec" style={{height:310,backgroundColor:"rgb(117 117 117)",width:1}}></div>
                   <SecurityCard Icon={PermPhoneMsgIcon} word={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, iure. Aspernatur est autem assumenda cumque maiores minima expedita similique. ?"}/> 
            </div>
    )
}
export default SecurityWrapper