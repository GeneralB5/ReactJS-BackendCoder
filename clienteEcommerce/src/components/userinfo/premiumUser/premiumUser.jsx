function UserPremium({onClick}){
    return(
        <div className="DivContainerPremiumUser" >
            <div style={{
                display:'flex',
                justifyContent:"center",
                alignItems:"center",
                flexDirection:'column',
                
            }} className="divBackgroundImg">
                <h3 style={{
                    position:'relative',
                    bottom:90,
                    right:100,
                    fontSize:30,
                    fontWeight:400,
                    margin:"20px 0  0 10px ",
                    fontFamily:"system-ui",
                    color:"#ffffff",
                    filter:"drop-shadow(0px 0px 2px #000000)"
                }}>BECOME A...</h3>
                <h2 className="h2PremiumUserDiv" style={{
                    fontSize:50,
                    fontWeight:700,
                    textAlign:"center",
                    marginTop:20,
                    fontFamily:"system-ui",
                    background:"linear-gradient(-45deg, red, purple)",
                    WebkitBackgroundClip:"text",
                    WebkitTextFillColor:"transparent",
                    filter:'drop-shadow(0px 0px 3px #000000)'
                }}>PREMIUM USER</h2>
            </div>
            <div className="divPricePremium">
                <div style={{
                    background:"linear-gradient(90deg, red, purple)",
                    borderRadius:5,
                    padding:1
                }}>
                <div className="divinsideAgregations">
                    <p>Create products</p>
                    <p>Promotions</p>
                    <p>Discounts</p>
                    <h2>$30.00</h2>
                </div>
                </div>
                <button className="buttonPremiumUser" onClick={onClick}>
                    Upgrade
                </button>
            </div>
        </div>
    )
}
export default UserPremium