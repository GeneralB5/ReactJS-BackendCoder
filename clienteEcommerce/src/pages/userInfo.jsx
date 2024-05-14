import { useContext, useEffect, useState } from "react"
import CardsInfo from "../components/cards/userInfoCards.jsx"
import ListOwnerCard from "../components/userinfo/userInfoOwner.jsx"
import { roleContext, userInfoContext } from "../context/context.jsx"
import { CircularProgress } from "@mui/material"
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { IconPhoto } from "../components/MUI/SX.jsx"
import UserPremium from "../components/userinfo/premiumUser/premiumUser.jsx"
import DocsCreation from "../components/docFields/docFields.jsx"
import DeleteUserButton from "../components/userinfo/button/deleteUserButton.jsx"
function UserInfo(){
    const {roles} = useContext(roleContext)
    const {user,setUser} = useContext(userInfoContext)
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
            <div style={{display:"flex",flexDirection:"column"}} className="divImageInfo" >
                <div className="divImageInfoInsider"   style={{
                    width:170,
                    height:170,
                    backgroundImage:`url(${user.thumbnail? user.thumbnail : 'data:image/png;base64,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'})`,
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"cover",
                    position:"relative",
                    bottom:20,
                    display:"flex",
                    justifyContent:"center",
                    alignItems:'center'
                }} ></div>            
            
                <AddAPhotoIcon sx={IconPhoto} className="IconImage" style={{
                    width:60,
                    height:60,
                    position:"absolute",
                    marginBottom:20
                    }} />
                </div>    
            </div>
            <div style={{display:'grid'}}>
            <div className="divInformation" >
                <CardsInfo title={"Nombre"} info={user.first_name ? user.first_name : "Not defined"} />
                <CardsInfo title={"Apellido"} info={user.last_name ? user.last_name : "Not defined"}/>
                <CardsInfo title={"Email"} info={user.email ? user.email : "Not defined"}/>
                <CardsInfo title={"Age"} info={user.age ? user.age : "Not defined"}/>
                <CardsInfo classNa={roles.includes(user.role)?'premium': undefined} title={"Role"} info={user.role ? user.role : "Not defined"}/>
                
            </div>
            <DeleteUserButton onClick={()=>{}} />
            </div>
        </div>
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