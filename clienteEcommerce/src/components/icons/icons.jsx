function IconGeneratorCir({variableClass,icon,click,style}){
    
    const classed = variableClass + " DivIconModif "
return(
    
    <div style={style}  className={classed} onClick={click?click:()=>{}}>
        {icon}
    </div>
)
}
export default IconGeneratorCir