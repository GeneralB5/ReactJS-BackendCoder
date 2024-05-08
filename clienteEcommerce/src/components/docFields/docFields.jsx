function DocsCreation({docName,docSendName}){
    const handleFetch = async(e)=>{
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        
        const fetchData = await fetch('http://localhost:8080/api/session/documents',{
            method:"POST",
             credentials: 'include',
             body:formData

        })
        const dataJson = await fetchData.json()
        console.log(dataJson)
    }
    return(
        <form className="FormSendDocuments" style={{
            height:300,
            width:250,
            backgroundColor:'lightgray',
            display:"flex",
            flexDirection:'column',
            justifyContent:"space-around",
            alignItems:"center",
            borderRadius:10,
            margin:'20px auto',
            
        }} onSubmit={handleFetch} enctype="multipart/form-data">
            <h2>{docName}</h2>
            <input type="file" name={docSendName} id={docName} />
            <input type="submit" value="Submit" />
        </form>
    )
}
export default DocsCreation