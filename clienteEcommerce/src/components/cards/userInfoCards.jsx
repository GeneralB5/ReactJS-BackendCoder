function CardsInfo({title,info,classNa=undefined}){

return(
<div style={classNa != undefined?{gap:0}:{}} className={classNa}>
    <h2>{title}</h2>
    <p>{info}</p>
</div>
)
}
export default CardsInfo