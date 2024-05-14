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

export {fetchCartdata ,handleResetCart }