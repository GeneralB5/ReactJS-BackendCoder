function DetaildCard({prod}){

    return(
        <div className="divInfoDetail" >
            <h2>Title</h2>
            <p>{prod.title}</p>
            <h2>Stock</h2>
            <p>{prod.stock}</p>
            <h2>Price</h2>
            <p>{prod.price}</p>
        </div>
    )
}
export default DetaildCard