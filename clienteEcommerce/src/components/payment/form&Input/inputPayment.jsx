function InputPayment({name,placeHolder,Style,setState,state ,maximun}){
    const handleChange =
    (e)=>{ 
        switch(name.toUpperCase()){
            case "CVC" :
            return setState({...state ,CVC:e.target.value})
            case "NUMERO DE TARJETA":
            return setState({...state ,NUMERODETARJETA:e.target.value})
            case "EXP" :
            return setState({...state ,EXP:e.target.value})
            case "NOMBRE" :
            return setState({...state ,NOMBRE:e.target.value})
        }
    }

    const classnames = "input-box " + Style
    console.log(classnames)
    return(
   <>
        <div  className={classnames} >
        <label className="input-label" htmlFor="creditNumber">{name}</label>
        <input maxLength={maximun} placeholder={placeHolder} className="inputPayment" id="creditNumber" name="creditNumber" type="email" onChange={handleChange} />
        </div>
  </>
    )
}
export default InputPayment