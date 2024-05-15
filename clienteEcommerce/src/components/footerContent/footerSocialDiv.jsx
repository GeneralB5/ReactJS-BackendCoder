import IconGeneratorCir from "../icons/icons"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
function FooterSocialDiv(){
return(
    <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        }}>
        <h2 
        style={{
            fontSize:'clamp(2em,5vw,5em)',
            fontWeight:1000,
            fontFamily:'system-ui'
        }}
        >Redes Sociales</h2>
        <div className="divWrappedSocial" style={{
            display:'flex',
            flexDirection:"row",
            justifyContent:"space-around",
            width:'auto'
        }}>
            <IconGeneratorCir style={{width:'3vw',height:'3vw'}} variableClass={'iconFooter'} icon={<InstagramIcon style={{width:'clamp(1em, 4vw, 3em)',height:'clamp(1em, 4vw, 3em)'}} />}/>
            <IconGeneratorCir style={{width:'3vw',height:'3vw'}} variableClass={'iconFooter'} icon={<XIcon style={{width:'clamp(1em, 4vw, 3em)',height:'clamp(1em, 4vw, 3em)'}} />}/>
            <IconGeneratorCir style={{width:'3vw',height:'3vw'}} variableClass={'iconFooter'} icon={<FacebookIcon style={{width:'clamp(1em, 4vw, 3em)',height:'clamp(1em, 4vw, 3em)'}} />}/>
        </div>
    </div>
)
}
export default FooterSocialDiv