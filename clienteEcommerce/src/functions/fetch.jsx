const fetchCartdata = async(setCart)=>{
    try {
        const data= await fetch('http://localhost:8080/api/cart/userCart',{
            method:'GET',
            credentials:"include",
        })
        const dataJson = await data.json()
        setCart(dataJson.payload)

    } catch (error) {
        console.log(error)
        setCart('')
    }
}

const handleResetCart= async(e,setCart)=>{
    try {
        e.preventDefault()
        const send = JSON.stringify({products:[]})
        const data = await fetch('http://localhost:8080/api/cart/userCart',
        {
         method:"PUT",
         credentials: 'include',
         headers:{"Content-Type":"application/json"},
         body:send
        })
        const dataJson = await data.json()
        setCart([])
    } catch (error) {
        console.log(error)
    }
}

const handlePullProd= async(Pid)=>{
    try {
        const send = JSON.stringify({Pid})
        const data = await fetch('http://localhost:8080/api/cart/userCart/pullProduct',
        {
         method:"DELETE",
         credentials: 'include',
         headers:{"Content-Type":"application/json"},
         body:send
        })
        if(!data) throw new Error
        const dataJson = await data.json()
        return dataJson
    } catch (error) {
        console.log(error)
    }
}
const handleDeleteUser = async(e)=>{
    try {
        e.preventDefault()
        const data = await fetch('http://localhost:8080/api/session/deleteUser',
        {
         method:"DELETE",
         credentials: 'include',
        })
        const dataJson = await data.json()
    } catch (error) {
        console.log(error)
    }
}
const handleLogout = async(e)=>{
    try {
        e.preventDefault()
        const data = await fetch('http://localhost:8080/api/session/logout',
        {
         method:"POST",
         credentials: 'include',
         headers:{"Content-Type":"application/json"},
         
        })
        const dataJson = await data.json()
        console.log(dataJson)
    } catch (error) {
        console.log(error)
    }
}

const handleProfilePic = async(e)=>{
    try {
        e.preventDefault()
        const inputFile = e.target
        const formElement = document.createElement("form");
        formElement.appendChild(inputFile)
        console.log(formElement)
        const formData = new FormData(formElement)
        const data = await fetch('http://localhost:8080/api/session/picture',
        {
         method:"POST",
         credentials: 'include',
         body:formData
        })
        if(!data) throw new Error
        const dataJson = data.json()
        return dataJson.payload
    } catch (error) {
        console.log(error)
    }
}
const fetchDyinamic = async(URL,setState = null,typeJSON={method:'GET',credentials:"include",headers:new Headers()})=>{
    try {
        
        if(!URL)throw new Error(`There is not an URL valid --> ${URL}`)
        const data= await fetch(URL,typeJSON)
        if(!data) throw new Error(`There is not data valid or an Error --> ${data}`)
        const dataJson = await data.json()
        if(setState != null) setState(dataJson.payload ? dataJson.payload : dataJson)
    }catch (error) {
        console.log(error)
        setState('')
    }
}

export {fetchCartdata ,handleResetCart,handleLogout,handlePullProd,handleProfilePic,fetchDyinamic,handleDeleteUser}