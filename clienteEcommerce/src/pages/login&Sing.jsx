import { useContext } from "react"
import { loginContext, userInfoContext } from "../context/context.jsx"
import { useNavigate } from "react-router-dom"

function Login_singin(){
    const {setIsLogged} = useContext(loginContext)    
    const {setUser} = useContext(userInfoContext)    
    let navigate = useNavigate()
    const handleFunciCreate= async (e)=>{
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const formJson = Object.fromEntries(formData.entries())
        const send= JSON.stringify({
            first_name:formJson.username,
            password:formJson.password,
            age:formJson.age,
            email:formJson.email,
            last_name:undefined
        })
         const data = await fetch(`http://localhost:8080/api/session/register`
         ,{
             method:"POST",
             headers:{"Content-Type":"application/json"},
             body: send
         })
         const dataJson = await data.json()
         setUser(dataJson.payload) 
         setIsLogged(document.cookie ==""? true : false)
    }
        const handleFunciLog= async (e)=>{
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const formJson = Object.fromEntries(formData.entries())
        const send = JSON.stringify({
            password:formJson.password,
            email:formJson.email
        })
        const data = await fetch(`http://localhost:8080/api/session/login`
         ,{
             method:"POST",
             credentials: 'include',
             headers:{"Content-Type":"application/json"},
             body:send

             
         })
        const dataJson = await data.json()
        setUser(dataJson.payload) 
        setIsLogged(document.cookie.match("isLogged") != null? true : false)
        navigate("/productos")
    }
return(
    <>
    <div className="main">  	
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
            <form onSubmit={handleFunciCreate}>
                <label className="labelLogin" htmlFor="chk" aria-hidden="true">Sign up</label>
                <input className="inputLogin" type="text" name="username" placeholder="User name"  />
                <input className="inputLogin" type="email" name="email" placeholder="Email"  />
                <div style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                    }}>
                    <input className="inputLogin" style={{
                        width:"35%",
                        margin:"20px 8px"
                    }} type="password" name="password" placeholder="Password"  />
                    <input className="inputLogin" style={{
                        width:"15%",
                        margin:"20px 8px"
                    }}
                     type="number" name="age" placeholder="age" />
                </div>
                <button>Sign up</button>
            </form>
        </div>

        <div className="login">
            <form action="" onSubmit={handleFunciLog}>
                <label className="labelLogin" htmlFor="chk" aria-hidden="true">Login</label>
                <input className="inputLogin" type="email" name="email" placeholder="Email" />
                <input className="inputLogin" type="password" name="password" placeholder="Password"  />
                <button>Login</button>
            </form>
        </div>
    </div>
</>
)
}
export default Login_singin