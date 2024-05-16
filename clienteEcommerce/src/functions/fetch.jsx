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
export {fetchCartdata ,handleResetCart,handleLogout,handlePullProd }