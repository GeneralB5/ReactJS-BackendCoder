import addDotEveryThreeCharac from "../../../functions/moneyCounter"
import {loadStripe} from '@stripe/stripe-js'
function ResumenCompra({dineroTotal , cart}){
    const Total = JSON.stringify((dineroTotal /10) + dineroTotal)
    const addTotal =Total.split('.')
    const frontNumber = addDotEveryThreeCharac(JSON.parse(addTotal[0]))
    const aditional = addTotal.length > 1? '.'+JSON.parse(addTotal[1]) : ''    
    const handlePayment= async(e)=>{
        try {
            e.preventDefault()
            const stripe = await loadStripe('pk_test_51P74nD08fdL5xljP6RjbQU4GIGVODAWdNf3GgSlI18aYXwLVil6uE0ysaquI5xpEy7LjEsp7I7yxVkWsXHeStBfW00DCYEN8jh')
            const send = JSON.stringify({products:cart})
            const data = await fetch('http://localhost:8080/pay/payment_intent',
            {
             method:"POST",
             credentials: 'include',
             headers:{"Content-Type":"application/json"},
             body:send
            })
            const dataJson = await data.json()
            window.location.href = dataJson.url
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div className="DivResumenDeCompras" >
            <header style={{
                height:105,
                width:"100%",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                backgroundColor:"hsl(0, 0%, 95%)",
                paddingBottom:10
            }}>
                <h2 className="h2ResumenDeCompra">Resumen de compra</h2>
            </header>
            <div style={{
                height:410,
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center",
                padding:"0 30px",
                gap:30
            }}>
                <div style={{
                    display:"flex",
                    justifyContent:"space-between",
                    width:'100%'}}>
                    <h3 style={{
                        flex:1,
                        fontWeight:300
                        }}>Productos: {dineroTotal}</h3>
                    <h3 style={{flex:1, textAlign:"right"}}>{}</h3>
                </div>
                <div style={{display:"flex",
                justifyContent:"space-between",
                width:'100%'}}>
                    <h3 style={{
                        flex:1,
                        fontWeight:300
                        }}>Envio: {dineroTotal / 10}</h3>
                    <h3 style={{flex:1, textAlign:"right"}}>{}</h3>
                </div>
            </div>
            <footer style={{
                height:"100%",
                display:"flex",
                flexDirection:"column",
                gap:10,
                backgroundColor:"hsl(0, 0%, 95%)",
                padding:20
                
            }}>
                <h2 className="h2TotalPayment">{frontNumber+aditional}</h2>
                <button onClick={handlePayment} style={{
                    width:200
                    }}>Continue Payment</button>
            </footer>
        
        </div>
    )
}
export default ResumenCompra