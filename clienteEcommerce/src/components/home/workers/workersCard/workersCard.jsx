function WorkersCard({worker}){
    const fullname = worker.name +" "+worker.lastName
    return(
        <div className="divInsideWorkers">
            
            <h2 className="h2PositionedWorker">{fullname}</h2>
            <img style={{height:200}} src={worker.thumbnail} width={200} height={200} />
            <div style={{height:85,padding:0}}>
            <p>{worker.position}</p>            
            <h5>"{worker.phrase}"</h5>
            </div>
        </div>
    )
}
export default WorkersCard