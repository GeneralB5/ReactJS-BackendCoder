function Home(){
    return(
        <>
           <section className="sectionHome">
                <div className="divInside">
                    <h1>Quienes somos?</h1>
                </div>
           </section>
            <div className=" divInfo">
                <div className="divInsideInfo">
                    <h2 className="TituloInfo">A que nos dedicamos?</h2>
                    <p className="pInfo"> nos dedicamos a la venta de productos de 
                        alta calidad, la exportamos de sus respectivos paises y las re-vendemos a buen precio</p>
                </div>
                <div className="phoneBorder">
                    <section>
                        <header>
                            <div style={{
                                position:'absolute',
                                width:15,
                                height:15,
                                marginBottom:13,
                                borderRadius:"50%",
                                backgroundColor:"#000",
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center"
                            }}>
                                <div style={{
                                    width:7,
                                    height:7,
                                    borderRadius:"50%",
                                    backgroundColor:"#fff",
                                    backgroundColor:"#2b2b2b"
                                }}></div>
                            </div>
                            <div style={{
                                width:25,
                                height:25,
                                borderRadius:"50%",
                                backgroundColor:"lightGray"
                            }}></div>
                            <div style={{
                                width:70,
                                height:25,
                                borderRadius:5,
                                backgroundColor:"lightGray"
                            }}></div>
                            <div style={{
                                width:50,
                                height:25,
                                borderRadius:5,
                                backgroundColor:"lightGray"
                            }}></div>
                        </header>
                        <div>

                        </div>
                        <footer>
                            
                        </footer>
                    </section>
                </div>
            </div>
        </>
    )
}
export default Home