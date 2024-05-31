function PhoneComponent({}){
    return(
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
                            <div style={{
                                height:50,
                                backgroundColor:"lightGray"
                            }}></div>
                            <div className="ProductsInsidePhone" style={{
                                height:'85%',
                                backgroundColor:"#ffffff",
                                display:"grid",
                                placeContent: "center",
                                gridTemplateColumns:"repeat(3, minmax(50px, 50px))",
                                gridTemplateRows:"repeat(4, minmax(70px, 50px))",
                                rowGap:16,
                                columnGap:40,
                            }}>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <footer>
                            
                        </footer>
                    </section>
                </div>
    )
}
export default PhoneComponent