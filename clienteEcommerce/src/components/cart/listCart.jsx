import Product from "./product/product"
function ListCart({products}){
return(
    <div className="divListCart">
        {products.map((product)=> <Product key={product._id} product={product} />)}
    </div>
)
}
export default ListCart