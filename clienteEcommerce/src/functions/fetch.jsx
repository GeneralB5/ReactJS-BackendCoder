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
    }
}

export {fetchCartdata}