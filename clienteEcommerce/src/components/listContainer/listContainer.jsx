import Cards from "../cards/cardsProd.jsx"

function ListContainer({products}){
    return(
        <div className="listContainer">
            {products.map(prod => <Cards key={prod._id} product={prod} />)}
        </div>
    )
}
export default ListContainer