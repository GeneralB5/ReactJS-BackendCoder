import { useState } from "react"
import FooterHomePageContent from "../footerContent/footerHomePageContent"
function FooterHomePage({count,setCount,maxLenght}) {
    
    return(
        <footer className="fotterHomePage" >
            <FooterHomePageContent state={count} setState={setCount} maxLenght={maxLenght} />
        </footer>
    )
}
export default FooterHomePage