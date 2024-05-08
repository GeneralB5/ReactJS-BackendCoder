import { Link } from "react-router-dom"

function Aside({setCategory}) {
    return(
        <aside className="asideHomePage">
            <div>
            <h2>Categoria</h2>
                <Link to={'/productos/category/Computacion'}>Computacion</Link>
                <Link to={'/productos/category/Refrigerios'} >Refrigerios</Link>
                <Link to={'/productos/category/moda'} >Moda</Link>
                <Link to={'/productos/category/Automovil'} >Automovil</Link>            
            </div>
            <Link className="clearFilter" to={'/productos'} >Clear filter</Link>
        </aside>
    )
}
export default Aside