import { createContext, useEffect, useState } from "react"
const loginContext = createContext(null)
const roleContext = createContext(null)
const userInfoContext = createContext(null)
const prodsContext = createContext(null)
function Context({children}){

    const handleInfoUser = async()=>{
        try {
            const data = await fetch('http://localhost:8080/api/session/user',{
                method:"GET",
                credentials:"include",
                headers:{"Content-Type":"application/json"}
            })
            const dataJson = await data.json()
            setUser(dataJson.payload)
        } catch (error) {
            console.log(error)
        }
    }
    const [isLogged,setIsLogged] = useState(document.cookie.length > 0? true : false)
    const [user,setUser] = useState()
    const [prods,setProds] = useState(null)
    const roles =['admin','usuario_premium']
    useEffect(()=>{
        setIsLogged(document.cookie.length > 0? true : false)
        setUser(isLogged ?()=> handleInfoUser() : '')
    },[document.cookie.length])
    return(
        <prodsContext.Provider value={{prods,setProds}}>
            <userInfoContext.Provider value={{user,setUser}}>
                <roleContext.Provider value={{roles}}>
                    <loginContext.Provider value={{isLogged,setIsLogged}} >
                    {children}
                    </loginContext.Provider>
                </roleContext.Provider>
            </userInfoContext.Provider>
        </prodsContext.Provider>
    )
}
export { Context , loginContext , roleContext, userInfoContext, prodsContext}