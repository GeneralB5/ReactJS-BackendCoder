import { useContext, useEffect, useState} from "react"
import CardsInfo from "../components/cards/userInfoCards.jsx"
import ListOwnerCard from "../components/userinfo/userInfoOwner.jsx"
import { roleContext, userInfoContext } from "../context/context.jsx"
import { CircularProgress } from "@mui/material"
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { IconPhoto } from "../components/MUI/SX.jsx"
import UserPremium from "../components/userinfo/premiumUser/premiumUser.jsx"
import DocsCreation from "../components/docFields/docFields.jsx"
import DivButtonsOut from "../components/userinfo/button/deleteUserButton.jsx"
import { handleProfilePic } from "../functions/fetch.jsx"
function UserInfo(){
    const {roles} = useContext(roleContext)
    const {user,setUser} = useContext(userInfoContext)
    const  [ProfileImg , setProfileImg] = useState(undefined)
    const handleClick = async()=>{  
        try {
            const fetchData = await fetch('http://localhost:8080/api/session/premiumUser',{
            method:"POST",
             headers:{"Content-Type":"application/json"},
             credentials: 'include'
            })
            const dataJson = await fetchData.json()
            setUser(dataJson.payload)
        } catch (error) {
            console.log(error)
        }
    }
    const handlePrueba = ()=>{
        const file = document.getElementById("FILE")
        if(!file)return''
        file.click()
    }
    if(!user ){
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
    useEffect(()=>{
        const importImage = async()=>{
             const path = user.thumbnail
             let URLProfile = path.split("BackendCoder\\")[1]
             URLProfile = URLProfile.split(".")
             const img =  `../../../../BackendCoder`
             const arrysplited = URLProfile[0].split("\\")

             const mimeType = URLProfile[1]
             let imgImport
             switch(mimeType){
                case "png":
                 imgImport = await import(`../../../../BackendCoder/${arrysplited[0]}/${arrysplited[1]}/${arrysplited[2]}/${arrysplited[3]}.png`)
                break
                case "jpg":
                imgImport = await import(`../../../../BackendCoder/${arrysplited[0]}/${arrysplited[1]}/${arrysplited[2]}/${arrysplited[3]}.jpg`)
                break
                default:
                imgImport = "https://static.vecteezy.com/system/resources/previews/007/409/979/non_2x/people-icon-design-avatar-icon-person-icons-people-icons-are-set-in-trendy-flat-style-user-icon-set-vector.jpg"
                break
            }
            setProfileImg(imgImport.default)
        }
        importImage()
    },[])
    return(
    <div style={{
        display:'flex',
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    }}>
        <div style={{marginBottom:30}} className="divUserInfo">
            <div className="divContainerBackGroundAndProfile" style={{display:"flex",flexDirection:"column"}} >
                <div className="backgroundImageProfile" >
                    <AddPhotoAlternateIcon style={{width:30,height:30}} />
                </div>
            <form onClick={handlePrueba} style={{display:"flex",flexDirection:"column",cursor:'pointer'}} className="divImageInfo" id="FORM" >
                <img src={ProfileImg}   className="divImageInfoInsider"    style={{
                    width:170,
                    height:190,
                    borderRadius:'50%',
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"cover",
                    position:"relative",
                    bottom:20,
                    display:"flex",
                    justifyContent:"center",
                    alignItems:'center',
                    backgroundImage:`url(${ProfileImg})`,
                    boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px"
                    }}/>
                <input onChange={(e)=>handleProfilePic(e)} type="file" name="profile" id="FILE" style={{display:"none"}} />
                <AddAPhotoIcon sx={IconPhoto} className="IconImage" style={{
                    width:60,
                    height:60,
                    position:"absolute",
                    marginBottom:20
                    }} />
            </form>    
            </div>
            <div style={{display:'grid'}}>
            <div className="divInformation" >
                <CardsInfo title={"Nombre"} info={user.first_name ? user.first_name : "Not defined"} />
                <CardsInfo title={"Apellido"} info={user.last_name ? user.last_name : "Not defined"}/>
                <CardsInfo title={"Email"} info={user.email ? user.email : "Not defined"}/>
                <CardsInfo title={"Age"} info={user.age ? user.age : "Not defined"}/>
                <CardsInfo classNa={roles.includes(user.role)?'premium': undefined} title={"Role"} info={user.role ? user.role : "Not defined"}/>
                
            </div>
            </div>
        </div>
        <DivButtonsOut />
        <div className="divDocuments">
            <DocsCreation docSendName={'identification'} docName={'identification'} />
            <DocsCreation docSendName={'comprobant_domic'} docName={'Comprobante de domicilio'} />
            <DocsCreation docSendName={'Comprobant_de_estado'} docName={'Comprobante de estado'} />
        </div>
        {roles.includes(user.role) ? <ListOwnerCard ownerProd={user.email} /> : <UserPremium onClick={handleClick} />}
    </div>
    )
}
export default UserInfo