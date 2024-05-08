import { useState } from "react"
import IconGeneratorCir from "./icons.jsx"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import DropDown from "./dropdown/dropdown.jsx";
function DropDownIconMenu(){
    const [open,setOpen] =useState(false)
    return(
    <div className="dropDown">
        <IconGeneratorCir variableClass={open ? 'arrowIcon' : ''} icon={<ArrowBackIosNewIcon />} click={ () =>setOpen(!open)}/>
        {open && <DropDown />}
    </div>
    )
}
export default DropDownIconMenu