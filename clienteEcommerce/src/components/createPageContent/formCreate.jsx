function FormCreatePage({onSubmit,setSelect}) {
    return(
        <div className="divInitialCreateProductPage">
        <h1>Create your own product</h1>
        <form className="formCreateProductPage" onSubmit={onSubmit} encType="multipart/form-data" >
            <div>
                <p>Title</p>
                <input type="text" name="title" placeholder="Title" id="" required />
            </div>
            <div>
                <p>Price</p>
                <input type="number" name="price" placeholder="Price" id="" required />
            </div>
            <div>
                <p>Stock</p>
                <input type="number" name="stock" placeholder="Stock" id="" required />
            </div>
            <div>
                <p>Thumbnail</p>
            <input type="file" name="thumbnail" id="" required />
            </div>
            <div>
                <p>Description</p>
            <input type="text" name="description" placeholder="Description" id="" required />
            </div>
            <div>
                <p>Status</p>
            <input type="text" name="status" placeholder="Status" id="" required />
            </div>
            <div>
                <p>Code</p>
            <input type="text" name="code" placeholder="Code" id="" required />
            </div>
            <div>
                <p>Category</p>
                <select name="" id="" onChange={(e)=>{setSelect(e.target.value)}}>
                    <option value="">Seleccione una opcion</option>
                    <option value="Computacion">Computacion</option>
                    <option value="Refrigerios">Refrigerios</option>
                    <option value="Moda">Moda</option>
                    <option value="Automovil">Automovil</option>
                </select>
            </div>
            <input type="submit" value="Submit" />
        </form>
    </div>
    )
}
export default FormCreatePage