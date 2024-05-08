import { CircularProgress } from "@mui/material"

function Loading({}) {
    return(
        <div style={{
            display:"flex",
            width:"100%",
            height:500,
            justifyContent:"center",
            alignItems:"center"
           }}>
           <CircularProgress thickness={5} size={70} />
           </div>
    )
}
export default Loading