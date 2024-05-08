import Product from "./product/product"
function ListCart({products}){
    console.log(products)
return(
    <div className="divListCart">
        {products.map((product)=> <Product product={product} />)}
    </div>
)
}
export default ListCart