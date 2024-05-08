function ContadorCompra({handleFunc}){

return(
<form className="formCompra" onSubmit={handleFunc}>
    <select name="Select">
        <option value="1">cantidad 1</option>
        <option value="2">cantidad 2</option>
        <option value="3">cantidad 3</option>
        <option value="4">cantidad 4</option>
        <option value="5">cantidad 5</option>
    </select>
    <div>
        <input className="rose" type="submit" value="add to cart" />
        <input type="reset" value="Reset" />
    </div>
</form>
)
}
export default ContadorCompra