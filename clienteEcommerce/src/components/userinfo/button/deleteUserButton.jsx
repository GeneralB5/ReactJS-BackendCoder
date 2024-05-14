import PersonOffIcon from '@mui/icons-material/PersonOff';
function DeleteUserButton({onClick}){
return(
    <div style={{display:"flex",justifyContent:'flex-end'}}>
                {/* delete button  */}
                <button onClick={{}} className="deleteUserButton" style={{width:50,height:50,borderRadius:'50%',margin:0,backgroundColor:'lightgray'}} >
                    <PersonOffIcon style={{
                        color:'red',
                        width:30,
                        height:30,
                        margin:'auto'
                    }} />
                </button>
            </div>
)
}
export default DeleteUserButton