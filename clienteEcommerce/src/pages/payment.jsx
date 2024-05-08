import {useContext, useEffect, useState} from "react"
import CreditCard from "../components/payment/creditCard.jsx"
import FormPayment from "../components/payment/form&Input/formPayment.jsx"
import visa from "../assets/creditCard/Visa.png"
import dinner from "../assets/creditCard/dinners.png"
import american from "../assets/creditCard/american.png"
import master from "../assets/creditCard/masterCard.png"
import { userInfoContext } from "../context/context.jsx"
function Payment(){
const [devo,setDevo] = useState(
    {
        CVC: "",
        NOMBRE:"",
        EXP:"",
        NUMERODETARJETA:""
    })
    const {user}=useContext(userInfoContext)
    useEffect(()=>{
        console.log(user)
        ///logica de sprite falta hacer
        
    },[])

    if(user == undefined){
        return(
            <div style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                margin:'10px auto',
                backgroundRepeat:"no-repeat",
                backgroundSize:"contain",
                width:"100%",
                height:450
            }}>
                <h1 className="h1NoProducts">No tienes acceso a esta seccion!</h1>
            </div>
        )
    }

    return(
        <div className="divPayment">
            <div className="divCreditImage" style={{
                display:"flex",
                justifyContent:"space-around"
            }}>
                <div>
                <CreditCard states={devo}/>
                <div className="divCVC" style={{
                    position:"relative",
                    width:110,
                    height:60,
                    left:"100%",
                    top:"1%",
                    backgroundColor:'white',
                    borderRadius:5,
                    border:'1px solid gray'
                    
                }}>
                    <div style={{
                        backgroundColor: "#171717",
                        width:80,
                        height:60,
                        float:"right",
                        borderTopRightRadius:4,
                        borderBottomRightRadius:4,
                        display:"flex",
                        alignItems:"center",
                        justifyContent:'right'
                        
                    }}>
                        <div style={{textAlign:"center",color:"whitesmoke"}}>
                        <p className="divPCVC" style={{
                            display:"table-cell",
                            background: "repeating-linear-gradient( 45deg,#303030,#303030 10px,#202020 10px,#202020 20px)",
                            width:50,
                            height:22,
                            borderTopLeftRadius:2,
                            borderBottomLeftRadius:2,
                            fontSize:12,
                            verticalAlign:"middle",
                            paddingLeft:2,
                            fontFamily: "system-ui",
                            fontWeight:600
                        }}>{devo.CVC.length > 0?devo.CVC : '***'}</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className="divImagePayment" ></div>
            </div>
            <FormPayment state={devo} setState={setDevo} />
            <div className="divCreditCardMarks">
            <img src={visa} alt="Tarjeta Visa"  loading="lazy" />
            <img src={dinner} alt="Tarjeta Dinners Club"  loading="lazy" />
            <img src={american} alt="Tarjeta American Express"  loading="lazy" />
            <img src={master} alt="Tarjeta MasterCard"  loading="lazy" />
            </div>

        </div>
    )
}
export default Payment