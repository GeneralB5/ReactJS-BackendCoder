import { fetchCartdata } from "./fetch";

function cartCounter(cart){
    if(cart.length <= 0) return 0;
    let quant = 0;
    cart.map(prod=>{
        quant += prod.quantity
    })
    return quant
}
const updateCounter = (prod,cart,setCart,quant,type) => {
    const {_id} = prod
    const search = cart.find( prods => prods._id == _id)
    console.log(search)
    if(cart.length == 0 || search == undefined ){
        return fetchCartdata(setCart)
    }
    const newCart = cart
    const index = cart.findIndex( prods => prods._id == _id)

    if(type == 'desc') newCart[index].quantity -= quant
    if(type == 'sum') newCart[index].quantity += quant
    console.log(newCart)
    setCart(newCart)
}


export {cartCounter,updateCounter}