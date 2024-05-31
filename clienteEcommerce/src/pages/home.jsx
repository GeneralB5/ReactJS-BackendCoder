import PhoneComponent from "../components/home/phone/phoneComponent"
import SecurityWrapper from "../components/home/securityFolder/securityWrapper"
import WorkingPeopleWrapped from "../components/home/workers/workersWrapper"

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
                <PhoneComponent />
            </div>
            <SecurityWrapper />
            <WorkingPeopleWrapped />
        </>
    )
}
export default Home