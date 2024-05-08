import SearchIcon from "@mui/icons-material/Search"
import { Input } from "@mui/material"
function SearchBar({placeholder,onchange}){

    
    return(
        <div className="DivBar" >
            <SearchIcon />
            <Input
                className="Search"
                placeholder={placeholder}
                onChange={onchange}
            />
        </div>
    )
}
export default SearchBar