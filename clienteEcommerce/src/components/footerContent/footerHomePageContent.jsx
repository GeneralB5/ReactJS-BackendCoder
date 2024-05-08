import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function FooterHomePageContent({state,setState, maxLenght}) {
    
    return(
    <div className="footHomePgCounter">
        { state != 0 ? <p className='Arrow'  onClick={()=>{setState(state - 1)}}><ArrowBackIosNewIcon /></p> : <p className='Arrow' style={{color:"gray"}}><ArrowBackIosNewIcon /></p>}
        <p>{state}</p>
        { state < maxLenght? <p className='Arrow' onClick={()=>{setState(state + 1)}} ><ArrowForwardIosIcon /></p> : <p className='Arrow' style={{color:"gray"}}><ArrowForwardIosIcon /></p> }
    </div>
    )
}
export default FooterHomePageContent